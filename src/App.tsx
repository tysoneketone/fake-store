import { useQuery } from 'react-query';
import { Product } from './types/product';
import { Order } from './types/order';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useLocalStorage, clearLocalStorage } from './utils/LocalStorage';
import { getTotalAmount } from './utils/getTotalAmount';

import { fetchProducts } from './api/fetchProducts';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ConfirmationPage } from './pages/ConfirmationPage'
import { Navbar } from './components/Navbar';
import { CircularProgress } from '@material-ui/core';

const App = () => {
  const [cartItems, setCartItems] = useLocalStorage('cartItems', [] as Product[]);
  const [order, setOrder] = useLocalStorage('order', {} as Order);
  const { data, isLoading, error } = useQuery<Product[]>('products', fetchProducts);

  if (isLoading) return (
    <div className={`flex w-screen h-screen justify-center items-center`}>
      <CircularProgress className={`text-black`} />
    </div>
  )

  if (error) return (
    <div className={`flex w-screen h-screen justify-center items-center font-bold`}>
      Unexpected error has occured
    </div>
  )

  const addToCart = (clickedItem: Product) => {
    setCartItems(prevItem => {
      const isItemInCart = prevItem.find(item => item.id === clickedItem.id)

      if (isItemInCart) {
        return prevItem.map(item => (
          item.id === clickedItem.id
          ? { ...item, qty: item.qty + 1 } 
          : item
        ));
      }

      return [...prevItem, { ...clickedItem, qty: 1 }];
    })
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((accumulator, item) => {
        if (item.id === id) {
          if (item.qty === 1) return accumulator;
          return [...accumulator, { ...item, qty: item.qty - 1 }]
        } else {
          return [...accumulator, item];
        }
      }, [] as Product[]
      )
    )
  };

  const addOrder = (orderedItems: Product[]) => {
    if (orderedItems === []) return;

    const generateId = Math.random().toString(18).slice(2);
    const order: Order = {
      id: generateId,
      products: orderedItems,
      totalAmount: getTotalAmount(orderedItems)
    };

    setOrder(order);
    setCartItems([])
    clearLocalStorage('cartItems')
  };

  const clearOrder = () => {
    setOrder({})
    clearLocalStorage('order')
  }

  return (
    <Router>
      <div className="w-full h-full m-auto p-0">
        <Navbar
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <div className="w-full h-full my-20">
          <Switch>
            <Route exact path='/' render={() => (
              <HomePage products={data} addToCart={addToCart} />
            )} />
            <Route exact path='/check-out' render={ () => (
              <CheckoutPage
                cartItems={cartItems}
                addToCart={addToCart}
                addOrderedItems={addOrder} 
                removeFromCart={removeFromCart} 
              />
            )} />
            <Route exact path='/confirmation' render={ () => (
              <ConfirmationPage
                order={order}
                clearOrder={clearOrder} />
            )} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
