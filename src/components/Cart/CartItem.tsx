import { Product } from '../../types/product';
import { Button } from '@material-ui/core'

interface Props {
  item: Product;
  addToCart: (clickedItem: Product) => void;
  removeFromCart: (id: number) => void;
}

export const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) =>
  <div className="flex flex-col w-full my-1 py-3 px-2 border-b-2 last:border-b-0">
    <h3 className="flex flex-wrap w-80 md:w-full text-lg font-bold">{item.title}</h3>
    <div className="flex justify-between mt-5">
      <div className="w-3/5">
        <p className="flex mr-3">
          <span className="font-semibold mr-1">Price:</span>
          <span>${item.price.toFixed(2)}</span>
        </p>
        <div className="flex mt-5">
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => removeFromCart(item.id)}
          >-</Button>
          <p className="mx-5">{item.qty}</p>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => addToCart(item)}
          >+</Button>
        </div>
        <p className="flex mt-5">
          <span className="font-semibold mr-1">Total:</span>
          <span>${(item.price * item.qty).toFixed(2)}</span>
        </p> 
      </div>
      <div
        className="flex justify-center items-center w-24 h-24"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      ></div>
    </div>
  </div>
