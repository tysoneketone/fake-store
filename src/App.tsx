import { useQuery } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useLocalStorage from './utils/useLocalStorage';

// Pages
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage'

// Components
import Navbar from './components/Navbar';

// Material UI
import { CircularProgress } from '@material-ui/core';

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  qty: number;
}

// GET All Products
const fetchProducts = async (): Promise<Product[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const [cartItems, setCartItems] = useLocalStorage('cartItems', [] as Product[]);
  const [orderItems, setOrderItems] = useLocalStorage('orderItems', [] as Product[]);
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

  const handleAddOrderItems = (orderedItems: Product[]) => {
    if (orderedItems === []) return;

    setOrderItems(prev => prev.concat(orderedItems));
    setCartItems(prev => [])
    clearLocalStorage('cartItems')
  };

  const totalCartAmount = cartItems
    ?.map(item => item.price * item.qty)
    .reduce((a, price) => a + price, 0)
    .toFixed(2)

  const totalOrderAmount = orderItems
    ?.map(item => item.price * item.qty)
    .reduce((a, price) => a + price, 0)
    .toFixed(2)

  const clearOrderItems = () => {
    setOrderItems(prev => [])
    clearLocalStorage('orderItems')
  }

  const clearLocalStorage = (key: string) => {
    localStorage.removeItem(key)
  }

  return (
    <Router>
      <div className={`w-full h-full m-auto p-0`}>
        <Navbar
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <div className={`w-full h-full mt-20`}>
          <Switch>
            <Route exact path='/' render={() => (
              <HomePage products={data} addToCart={addToCart} />
            )} />
            <Route exact path='/check-out' render={ () => (
              <CheckoutPage
                cartItems={cartItems}
                addToCart={addToCart}
                totalCartAmount={totalCartAmount}
                addOrderedItems={handleAddOrderItems} 
                removeFromCart={removeFromCart} 
              />
            )} />
            <Route exact path='/confirmation' render={ () => (
              <ConfirmationPage
                orderedItems={orderItems}
                totalOrderAmount={totalOrderAmount}
                clearOrder={clearOrderItems} />
            )} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
