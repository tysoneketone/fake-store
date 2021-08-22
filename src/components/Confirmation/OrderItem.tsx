import { Product } from "../../types/product";

interface Props {
  item: Product;
}

export const OrderItem: React.FC<Props> = ({ item }) =>
  <div className="flex flex-col w-full py-5 px-2 border-b-2 last:border-b-0">
    <div className="flex justify-between w-full text-xs">
      <div className="flex justify-center items-center w-20 h-20 mx-auto"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      ></div>
      <div className="w-4/5 px-5">
        <h3 className="flex flex-wrap w-full md:w-full text-md font-bold">{item.title}</h3>
        <p className="mt-1">
          <span className="font-semibold mr-1"> Qty:</span>
          <span>{item.qty}</span>
        </p>
        <p className="mt-1">
          <span className="font-semibold mr-1">Price:</span>
          <span>${item.price.toFixed(2)}</span>
        </p>
        <p className="flex mt-1">
          <span className="font-semibold mr-1">Item Total:</span>
          <span>${(item.price * item.qty).toFixed(2)}</span>
        </p>
      </div>
    </div>
  </div>
