import { useState, Fragment } from 'react';
import { useQuery } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import ProductCard from './components/Product/ProductCard';

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
  const [cartItems, setCartItems] = useState([] as Product[]);
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

  const handleAddToCart = (clickedItem: Product) => {
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

  const handleRemoveFromCart = (id: number) => {
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

  return (
    <Router>
      <div className={`w-full h-full m-auto p-0`}>
        <Navbar
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
        <Switch>
          <Route exact path='/' render={ () => (
            <Fragment>
              <div className={`flex flex-col lg:flex-row w-full h-full px-3 mt-20`}>
                <div className={`w-full mt-5`}>
                  <div className={`grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 break-inside`}>
                  {
                    data?.map((product) => {
                      return (
                        <div key={product.id} className={`flex flex-col justify-center items-center w-full`}>
                          <ProductCard product={product} handleAddToCart={handleAddToCart} />
                        </div>  
                      )
                    })
                  }
                  </div>
                </div>
              </div>    
            </Fragment>
          )} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
