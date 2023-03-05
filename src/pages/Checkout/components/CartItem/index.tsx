import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../../../context/OrderContext'

import {
  CartItemContainer,
  CoffeeAmountContainer,
  CoffeeDescriptionContainer,
  CoffeeOptionsContainer,
  CoffeeTitleContainer,
  PriceContainer,
  RemoveCoffeeContainer,
} from './styles'

interface CartItensProps {
  coffeeName: string
  imageSrc: string
  coffeeAmount: number
  price: string
  coffeeId: number
}

export function CartItem({
  coffeeAmount,
  coffeeName,
  imageSrc,
  price,
  coffeeId,
}: CartItensProps) {
  const [priceWithAmount, setPriceWithAmount] = useState('')
  const { removeProductFromCart, decreaseCoffeeAmount, increaseCoffeeAmount } =
    useContext(OrderContext)

  useEffect(() => {
    setPriceWithAmount(
      String(
        (Number(price.replace(/,/g, '.')) * coffeeAmount).toFixed(2),
      ).replace('.', ','),
    )
  }, [coffeeAmount, price])

  function handleRemoveCartItem() {
    removeProductFromCart(coffeeId)
  }

  function handleMinusButton() {
    decreaseCoffeeAmount(coffeeId)
  }
  function handlePlusButton() {
    increaseCoffeeAmount(coffeeId)
  }

  return (
    <CartItemContainer>
      <CoffeeDescriptionContainer>
        <img src={imageSrc} alt="" />
        <CoffeeTitleContainer>
          <h2>{coffeeName}</h2>
          <CoffeeOptionsContainer>
            <CoffeeAmountContainer>
              <Minus
                onClick={handleMinusButton}
                size={14}
                weight="bold"
                type="button"
              />
              <p>{coffeeAmount}</p>
              <Plus onClick={handlePlusButton} size={14} weight="bold" />
            </CoffeeAmountContainer>
            <RemoveCoffeeContainer type="button" onClick={handleRemoveCartItem}>
              <Trash size={16} weight="bold" />
              remover
            </RemoveCoffeeContainer>
          </CoffeeOptionsContainer>
        </CoffeeTitleContainer>
      </CoffeeDescriptionContainer>
      <PriceContainer>R$ {priceWithAmount}</PriceContainer>
    </CartItemContainer>
  )
}
