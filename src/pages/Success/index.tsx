import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  BaseInfoText,
  DeliveryImageContainer,
  DeliveryInfoContainer,
  HighlightedInfoText,
  LocationInfoContainer,
  PaymentInfoContainer,
  SuccessContainer,
  TextInfoContainer,
  TimeInfoContainer,
  TitleContainer,
} from './styles'
import deliveryImage from '../../assets/Illustration.svg'
import { useContext } from 'react'
import { OrderContext } from '../../context/OrderContext'

export function Success() {
  const { costumerInfo } = useContext(OrderContext)

  function paymentUnabbreviated() {
    switch (costumerInfo.paymentType) {
      case 'credito':
        return 'Cartão de Crédito'
      case 'debito':
        return 'Cartão de Débito'
      default:
        return 'Em Dinheiro'
    }
  }

  const paymentDescription = paymentUnabbreviated()

  return (
    <SuccessContainer>
      <TitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TitleContainer>

      <DeliveryImageContainer>
        <DeliveryInfoContainer>
          <LocationInfoContainer>
            <span>
              <MapPin weight="fill" size={16} />
            </span>

            <TextInfoContainer>
              <BaseInfoText>
                Entrega em
                <HighlightedInfoText>
                  {costumerInfo.street}, {costumerInfo.number}
                </HighlightedInfoText>
              </BaseInfoText>

              <BaseInfoText>
                {costumerInfo.district} - {costumerInfo.city},{' '}
                {costumerInfo.state}
              </BaseInfoText>
            </TextInfoContainer>
          </LocationInfoContainer>
          <TimeInfoContainer>
            <span>
              <Timer size={16} weight="fill" />
            </span>

            <TextInfoContainer>
              <BaseInfoText>Previsão de entrega</BaseInfoText>
              <HighlightedInfoText>20 min - 30 min </HighlightedInfoText>
            </TextInfoContainer>
          </TimeInfoContainer>
          <PaymentInfoContainer>
            <span>
              <CurrencyDollar size={16} />
            </span>
            <TextInfoContainer>
              <BaseInfoText>Pagamento na entrega</BaseInfoText>
              <HighlightedInfoText>{paymentDescription}</HighlightedInfoText>
            </TextInfoContainer>
          </PaymentInfoContainer>
        </DeliveryInfoContainer>
        <img src={deliveryImage} alt="" />
      </DeliveryImageContainer>
    </SuccessContainer>
  )
}
