import { Product } from '../../types/product';
import { getTotalAmount } from '../../utils/getTotalAmount';
import { CartItem } from './CartItem';

interface Props {
  cartItems: Product[];
  addToCart: (clickedItem: Product) => void;
  removeFromCart: (id: number) => void;
}

export const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) =>
  <div className="w-full md:w-96">
    <h1 className="w-full mb-5 text-center text-xl font-bold">Your Shopping Cart</h1>
    {cartItems.length === 0 ? <p className="pt-5 text-center"> No items in cart</p> : null}
    {cartItems.map(item => (
      <CartItem
        key={item.id} 
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart} 
      />
    ))}
    <h3 className="mt-5 text-xl md:text-xl px-5 md:px-2">
      <span className="font-bold mr-1">Total Purchase:</span>
      <span>${getTotalAmount(cartItems)}</span>
    </h3>
  </div>

