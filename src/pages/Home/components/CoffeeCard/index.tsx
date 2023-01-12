import {
  ActionsContainer,
  BuyContainer,
  CoffeeAmountInput,
  CoffeeCartButton,
  CoffeeContainer,
  CoffeeInputContainer,
  PriceContainer,
  SummaryContainer,
  TagContainer,
} from './styles'

import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { Coffee } from '../../../../dtos/coffee'
import { useContext, useState } from 'react'
import { OrderContext } from '../../../../context/OrderContext'

interface CoffeeCardProps {
  coffeeType: Coffee
}

export function CoffeeCard({ coffeeType }: CoffeeCardProps) {
  const { addProductToCart } = useContext(OrderContext)
  const [amount, setAmount] = useState(1)

  function handleCartButtonActivate() {
    addProductToCart({ coffee: coffeeType, amount })
  }

  function handleMinusAmountInput() {
    setAmount((state) => {
      if (state > 1) {
        return state - 1
      } else {
        return state
      }
    })
  }

  function handlePlusAmountInput() {
    setAmount((state) => state + 1)
  }

  return (
    <CoffeeContainer>
      <img src={`src/assets/coffeeTypes/${coffeeType.image}`} alt="" />
      <TagContainer>
        {coffeeType.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </TagContainer>
      <SummaryContainer>
        <h1>{coffeeType.title}</h1>
        <p>{coffeeType.description}</p>
      </SummaryContainer>
      <BuyContainer>
        <PriceContainer>
          <span>R$ </span>
          {coffeeType.price}
        </PriceContainer>
        <ActionsContainer>
          <CoffeeInputContainer>
            <Minus
              size={14}
              weight="bold"
              type="button"
              onClick={handleMinusAmountInput}
            />
            <CoffeeAmountInput>{amount}</CoffeeAmountInput>
            <Plus
              size={14}
              weight="bold"
              type="button"
              onClick={handlePlusAmountInput}
            />
          </CoffeeInputContainer>
          <CoffeeCartButton onClick={handleCartButtonActivate} type="button">
            <ShoppingCartSimple size={22} weight="fill" />
          </CoffeeCartButton>
        </ActionsContainer>
      </BuyContainer>
    </CoffeeContainer>
  )
}
