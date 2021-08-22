import { Product } from '../types/product';
import { ProductCard } from '../components/Product/ProductCard';

interface Props {
  products?: Product[];
  addToCart: (clickedItem: Product) => void;
}

export const HomePage: React.FC<Props> = ({ products, addToCart }) =>
  <div className="flex flex-col lg:flex-row max-w-7xl h-full mx-auto px-3">
    <div className="w-full mt-5">
      <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
      {products?.map((product) =>
        <div key={product.id} className="flex flex-col justify-center items-center w-full">
          <ProductCard product={product} />
        </div>  
      )}
      </div>
    </div>
  </div>
