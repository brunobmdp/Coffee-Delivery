import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 5rem 18rem;
  flex-direction: column;
  gap: 1.75rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  h1 {
    color: ${(props) => props.theme['yellow-700']};
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
  }
  p {
    color: ${(props) => props.theme['gray-800']};
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
  }
`
export const DeliveryImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DeliveryInfoContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 32.875rem;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px 36px;
  background: linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%) border-box;

  border: 1px solid transparent;
`
const BaseInfo = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  width: 100%;
  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 100%;
    color: ${(props) => props.theme.background};
  }
`
export const LocationInfoContainer = styled(BaseInfo)`
  > span {
    background: ${(props) => props.theme['purple-400']};
  }
`
export const TimeInfoContainer = styled(BaseInfo)`
  > span {
    background: ${(props) => props.theme['yellow-400']};
  }
`
export const PaymentInfoContainer = styled(BaseInfo)`
  > span {
    background: ${(props) => props.theme['yellow-700']};
  }
`
export const TextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    flex: 1;
    gap: 0.25rem;
    flex-wrap: wrap;
  }
`

export const HighlightedInfoText = styled.span`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.3;
  color: ${(props) => props.theme['gray-700']};
`
export const BaseInfoText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3;
  color: ${(props) => props.theme['gray-700']};
  > span {
    padding-left: 0.5rem;
  }
`
