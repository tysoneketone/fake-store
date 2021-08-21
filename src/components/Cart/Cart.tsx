import CartItem from './CartItem';
import { Product } from '../../App';

type Props = {
  cartItems: Product[];
  addToCart: (clickedItem: Product) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const totalCartArray = cartItems
    .map(item => item.price * item.qty)
    .reduce((a, price) => a + price, 0)

  return (
    <div className={`md:w-96`}>
      <h1 className={`w-full mb-5 text-center text-xl font-bold`}>Your Shopping Cart</h1>
      { cartItems.length === 0 ? <p className={`pt-5 text-center`}> No items in cart</p> : null }
      { cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h3 className={`mt-5 text-xl md:text-xl px-5 md:px-2`}>
        <span className={`font-bold mr-1`}>Total Purchase:</span>
        <span>${totalCartArray.toFixed(2)}</span>
      </h3>
    </div>
  )
}

export default Cart;