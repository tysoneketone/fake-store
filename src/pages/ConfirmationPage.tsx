import { Product } from '../App';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import OrderItem from '../components/Confirmation/OrderItem';

type Props = {
  orderId: string;
  orderedItems?: Product[];
  totalOrderAmount: string;
  clearOrder: () => void;
}

const ConfirmationPage: React.FC<Props> = ({ orderId, orderedItems, totalOrderAmount,  clearOrder }) => {
  return (
    <div className={`flex flex-col justify-center items-center max-w-7xl mx-auto`}>
      <h1 className={`w-full my-5 text-4xl text-center font-bold`}>Your Order Confirmation</h1>
      <h1 className={`w-full md:w-3/5 my-5 text-xl font-bold`}>Order ID: #{orderId}</h1>
      <div className={`w-full md:w-3/5 mx-auto mb-8`}>
        { 
          orderedItems?.map((item) => (
            <OrderItem
              key={item.id}
              item={item}
            />
          ))
        }
      </div>
      <h3 className={`my-5 text-xl md:text-xl px-5 md:px-2`}>
        <span className={`font-bold mr-1`}>Total Purchase:</span>
        <span>${totalOrderAmount}</span>
      </h3>
      <Button
        component={Link}
        to='/'
        variant="contained"
        color="primary"
        className={`w-3/5`}
        onClick={() => clearOrder() }
      >Continue Shopping</Button>
    </div>
  )
}

export default ConfirmationPage;
