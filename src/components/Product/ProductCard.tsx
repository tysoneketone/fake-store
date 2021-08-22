import React from 'react'
import { Product } from '../../types/product'

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) =>
  <div className="flex flex-col justify-center items-center w-full h-full mt-5 md:m-auto">
    <div className="flex justify-center items-center w-40 md:w-48 h-56 md:h-48"
      style={{
        backgroundImage: `url(${product.image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    ></div>
    <div className="flex flex-col w-40 h-24 mt-2 text-sm">
      <h3 className="font-semibold">{product.title}</h3>
      <h3 className="mt-1">${product.price.toFixed(2)}</h3>
    </div>
  </div>
