import { Product } from '../../App';
import { Button } from '@material-ui/core'

type Props = {
  item: Product;
  addToCart: (clickedItem: Product) => void;
  removeFromCart: (id: number) => void;
}

const CheckoutItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <div className={`flex flex-col w-full py-5 px-2 border-b-2 last:border-b-0`}>
    <h3 className={`flex flex-wrap w-full md:w-full text-lg font-bold`}>{item.title}</h3>
    <div className={`flex justify-between w-full mt-2 text-xs`}>
      <div className={`flex justify-center items-center w-2/5 md:w-1/5 h-40 mx-auto p-5`}
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      ></div>
      <div className={`w-3/4 px-5`}>
        <h6 className={`flex flex-col w-full md:w-full`}>
            <span className={`float-left font-bold mr-1`}>Description:</span>
            <p className={``}>{item.description}</p>
        </h6>
        <p className={`flex mt-2 mr-3`}>
          <span className={`font-semibold mr-1`}>Price:</span>
          <span>${item.price.toFixed(2)}</span>
        </p>
        <div className={`flex items-center mt-5`}>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => removeFromCart(item.id)}
          >-</Button>
           <p className={`mx-1 md:mx-5`}>Qty: {item.qty}</p>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => addToCart(item)}
          >+</Button>
        </div>
        <p className={`flex my-5 text-sm`}>
          <span className={`font-semibold mr-1`}>Item Total:</span>
          <span>${(item.price * item.qty).toFixed(2)}</span>
        </p>
      </div>
    </div>
  </div>
)

export default CheckoutItem;