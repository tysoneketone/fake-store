import ProductCard from '../components/Product/ProductCard';
import { Product } from '../App';

type Props = {
  products?: Product[];
  addToCart: (clickedItem: Product) => void;
}

const HomePage: React.FC<Props> = ({ products, addToCart }) => {
  return (
    <div className={`flex flex-col lg:flex-row w-full h-full px-3`}>
      <div className={`w-full mt-5`}>
        <div className={`grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 break-inside`}>
        {
          products?.map((product) => {
            return (
              <div key={product.id} className={`flex flex-col justify-center items-center w-full`}>
                <ProductCard product={product} handleAddToCart={addToCart} />
              </div>  
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default HomePage;