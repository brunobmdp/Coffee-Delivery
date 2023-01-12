import { Product } from '../dtos/Product'
import { cafeList } from './coffeeList'

export const orderExemple: Product[] = [
  {
    coffee: cafeList[0],
    amount: 1,
  },
  {
    coffee: cafeList[2],
    amount: 1,
  },
]
