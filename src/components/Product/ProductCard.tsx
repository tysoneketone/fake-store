import React from 'react'
import { Product } from '../../App';

type Props = {
  product: Product;
  handleAddToCart: (clickedProduct: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, handleAddToCart }) => (
  <div className={`flex flex-col justify-center items-center w-full h-full mt-5 md:m-auto hover:shadow`}>
    <div
      className={`flex justify-center items-center w-48 h-48 p-5`}
      style={{
        backgroundImage: `url(${product.image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    ></div>
    <div className={`flex flex-col justify-between items-center w-full h-full p-2 text-sm`}>
      <div>
        <h3 className={`font-semibold`}>{product.title}</h3>
        <h3 className={`mt-1`}>${product.price.toFixed(2)}</h3>
        <p className={`mt-1 text-gray-800`}>{product.description}</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className={`w-full font-semibold`}>Add to cart</button>
    </div>
  </div>
)

export default ProductCard;
