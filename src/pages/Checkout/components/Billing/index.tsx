import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { AddressContext } from '../..'
import {
  BillingContainer,
  PaymentButtonContainer,
  PaymentInputContainer,
  PaymentOptionsContainer,
  TitleContainer,
} from './styles'

export function Billing() {
  const { register } = useContext(AddressContext)
  return (
    <BillingContainer>
      <TitleContainer>
        <CurrencyDollar size={22} />
        <div>
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </TitleContainer>
      <PaymentOptionsContainer>
        <PaymentInputContainer
          type="radio"
          id="credito"
          value="credito"
          {...register('paymentType')}
        />
        <PaymentButtonContainer htmlFor="credito">
          <CreditCard size={16} />
          <p>cartão de crédito</p>
        </PaymentButtonContainer>
        <PaymentInputContainer
          type="radio"
          id="debito"
          value="debito"
          {...register('paymentType')}
        />
        <PaymentButtonContainer htmlFor="debito">
          <Bank size={16} />
          <p>cartão de débito</p>
        </PaymentButtonContainer>
        <PaymentInputContainer
          type="radio"
          id="dinheiro"
          value="dinheiro"
          {...register('paymentType')}
        />
        <PaymentButtonContainer htmlFor="dinheiro">
          <Money size={16} />
          <p>dinheiro</p>
        </PaymentButtonContainer>
      </PaymentOptionsContainer>
    </BillingContainer>
  )
}
