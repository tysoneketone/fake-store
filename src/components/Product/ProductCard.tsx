import React from 'react'
import { Product } from '../../App';
import { Button } from '@material-ui/core'

type Props = {
  product: Product;
  handleAddToCart: (clickedProduct: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, handleAddToCart }) => (
  <div className={`flex flex-col justify-center items-center w-full h-full mt-5 md:m-auto hover:shadow`}>
    <div
      className={`flex justify-center items-center w-full h-48 p-5`}
      style={{
        backgroundImage: `url(${product.image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    ></div>
    <div className={`flex flex-col justify-between items-center w-full h-auto p-2`}>
      <div className={``}>
        <h3 className={`text-base font-semibold`}>{product.title}</h3>
        <p className={`text-sm`}>{product.description}</p>
        <h3 className={`my-2`}>
          <span className={`font-semibold mr-1`}>Price:</span>
          <span>${product.price.toFixed(2)}</span>
        </h3>
      </div>
      <Button
        onClick={() => handleAddToCart(product)}
        variant="contained"
        color="primary"
        className={`w-full`}
      >Add to cart</Button>
    </div>
  </div>
)

export default ProductCard;