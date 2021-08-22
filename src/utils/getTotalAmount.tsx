import { Product } from "../types/product";

export const getTotalAmount = (products?: Product[]) =>
  products?.map(product => product.price * product.qty)
  .reduce((a, price) => a + price, 0)
  .toFixed(2)
