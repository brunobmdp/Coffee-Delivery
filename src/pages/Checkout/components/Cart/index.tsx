import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AddressContext } from '../..'
import { OrderContext } from '../../../../context/OrderContext'

import { CartItem } from '../CartItem'
import {
  BillingResumeContainer,
  CartContainer,
  CoffeePriceContainer,
  ConfirmButtonContainer,
  DeliveryPriceContainer,
  Divider,
  TotalPriceContainer,
} from './styled'

export function Cart() {
  const deliveryTax = '3,50'
  const { handleConfirmPurchase, formState } = useContext(AddressContext)
  const { order } = useContext(OrderContext)
  const [total, setTotal] = useState('')

  useEffect(() => {
    const productsTotal = String(
      order
        .reduce(
          (acc, product) =>
            acc +
            Number(product.coffee.price.replace(/,/g, '.')) * product.amount,
          0,
        )
        .toFixed(2),
    )
    const totalWithComma = productsTotal.replace('.', ',')
    setTotal(totalWithComma)
  }, [order])

  const totalWithDeliveryTax = String(
    (
      Number(deliveryTax.replace(/,/g, '.')) + Number(total.replace(/,/g, '.'))
    ).toFixed(2),
  ).replace('.', ',')

  const isCostumerInfoValid = !formState.isValid
  return (
    <CartContainer>
      {order.map((product) => {
        return (
          <div key={product.coffee.id}>
            <CartItem
              coffeeId={product.coffee.id}
              coffeeAmount={product.amount}
              coffeeName={product.coffee.title}
              imageSrc={product.coffee.image}
              price={product.coffee.price}
            />
            <Divider />
          </div>
        )
      })}

      <BillingResumeContainer>
        <CoffeePriceContainer>
          <p>Total de itens</p>
          <span>R$ {total}</span>
        </CoffeePriceContainer>
        <DeliveryPriceContainer>
          <p>Entrega</p>
          <span>R$ {deliveryTax}</span>
        </DeliveryPriceContainer>
        <TotalPriceContainer>
          <p>Total</p>
          {totalWithDeliveryTax === deliveryTax ? (
            <span>R$ 0,00</span>
          ) : (
            <span>R$ {totalWithDeliveryTax}</span>
          )}
        </TotalPriceContainer>
      </BillingResumeContainer>
      <NavLink to="/success">
        <ConfirmButtonContainer
          disabled={isCostumerInfoValid}
          type="button"
          onClick={handleConfirmPurchase}
        >
          confirmar pedido
        </ConfirmButtonContainer>
      </NavLink>
    </CartContainer>
  )
}
