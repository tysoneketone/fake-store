import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Product } from '../App';
import Cart from './Cart/Cart';
// import CheckOutPage from '../pages/CheckoutPage';

import { Drawer, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

type Props = {
  cartItems: Product[];
  addToCart: (clickedItem: Product) => void;
  removeFromCart: (id: number) => void;
}

const Navbar: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const getTotalItems = (products: Product[]) =>
    products.reduce((count: number, product: Product) => count + product.qty, 0)

  return (
    <div className="flex fixed top-0 justify-between items-center w-full h-30 shadow-md bg-white">
      <Link to='/'>
        <h1 className={`text-3xl font-bold p-4`}>
          <span>Fake</span>
          <span className={`text-gray-700`}>|</span>
          <span className={`text-gray-500`}>Store</span>
        </h1>
      </Link>
      <div>
        <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
          <CloseIcon fontSize='large' className={`m-2`} onClick={() => setCartOpen(false) } />
          <Cart
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart} 
          />
          { cartItems.length > 0 ? ( 
            <div className={`flex justify-end items-center my-5 px-5`}>
              <Button
                component={Link}
                to='/check-out'
                variant="contained"
                color="primary"
                className={`w-full`}
                onClick={() => setCartOpen(false) }
              >Check Out</Button>
            </div>
            ) : null
          }
        </Drawer>
        <div className={`flex justify-center items-center w-full h-full mr-10`}>
          <div 
            className={`flex justify-center items-center rounded-full py-1 px-4 bg-gray-700 hover:bg-gray-800 text-white text-md`}
            onClick={() => setCartOpen(true) }
          >
            <ShoppingCartIcon style={{ width: '18px' }} />
            <p className={`ml-1`}>Cart · </p>
            <p className={`ml-1`}>{getTotalItems(cartItems)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;