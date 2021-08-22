import { Product } from './product';

export type Order = {
  id?: string;
  products?: Product[];
  totalAmount?: string; 
}
