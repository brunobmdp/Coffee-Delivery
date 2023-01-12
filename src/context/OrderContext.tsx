import { createContext, ReactNode, useEffect, useState } from 'react'
import { produce } from 'immer'
import { orderExemple } from '../data/orderExemple'
import { CostumerInfo } from '../dtos/CostumerInfo'

import { Product } from '../dtos/Product'

interface OrderContextProviderProps {
  children: ReactNode
}

interface OrderContextType {
  order: Product[]
  costumerInfo: CostumerInfo
  addProductToCart: ({ coffee, amount }: Product) => void
  handleCheckoutInformation: (data: CostumerInfo) => void
  removeProductFromCart: (coffeeId: number) => void
  decreaseCoffeeAmount: (coffeeId: number) => void
  increaseCoffeeAmount: (coffeeId: number) => void
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<Product[]>(orderExemple)

  const storedStateAsJSON: CostumerInfo = JSON.parse(
    localStorage.getItem('@Coffee-Delivery:Costumer-info-1.0.0')!,
  )

  const [costumerInfo, setCostumerInfo] = useState<CostumerInfo>({
    cep: storedStateAsJSON ? storedStateAsJSON.cep : '',
    city: storedStateAsJSON ? storedStateAsJSON.city : '',
    complement: storedStateAsJSON ? storedStateAsJSON.complement : '',
    district: storedStateAsJSON ? storedStateAsJSON.district : '',
    number: storedStateAsJSON ? storedStateAsJSON.number : '',
    paymentType: storedStateAsJSON ? storedStateAsJSON.paymentType : 'credito',
    state: storedStateAsJSON ? storedStateAsJSON.state : '',
    street: storedStateAsJSON ? storedStateAsJSON.street : '',
  })

  function addProductToCart({ coffee, amount }: Product) {
    const coffeeOrderIndex = order.findIndex(
      (product) => product.coffee.id === coffee.id,
    )
    if (coffeeOrderIndex >= 0) {
      setOrder((state) =>
        produce(state, (draft) => {
          draft[coffeeOrderIndex].amount = amount
        }),
      )
    } else {
      setOrder((state) => [...state, { amount, coffee }])
    }
  }

  function removeProductFromCart(coffeeId: number) {
    setOrder(order.filter((product) => product.coffee.id !== coffeeId))
  }

  function handleCheckoutInformation(data: CostumerInfo) {
    setCostumerInfo(data)
  }

  function decreaseCoffeeAmount(coffeeId: number) {
    const productIndex = order.findIndex(
      (product) => product.coffee.id === coffeeId,
    )!
    if (order[productIndex].amount > 1) {
      setOrder((state) =>
        produce(state, (draft) => {
          draft[productIndex].amount--
        }),
      )
    } else {
      removeProductFromCart(coffeeId)
    }
  }

  function increaseCoffeeAmount(coffeeId: number) {
    const productIndex = order.findIndex(
      (product) => product.coffee.id === coffeeId,
    )!
    setOrder((state) =>
      produce(state, (draft) => {
        draft[productIndex].amount++
      }),
    )
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(costumerInfo)
    localStorage.setItem('@Coffee-Delivery:Costumer-info-1.0.0', stateJSON)
  }, [costumerInfo])

  return (
    <OrderContext.Provider
      value={{
        order,
        costumerInfo,
        addProductToCart,
        handleCheckoutInformation,
        removeProductFromCart,
        decreaseCoffeeAmount,
        increaseCoffeeAmount,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
