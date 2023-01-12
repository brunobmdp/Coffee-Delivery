import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 1.5rem;
  width: 100%;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 44px;
  a {
    text-decoration: none;
    &:focus {
      box-shadow: none;
    }
  }
`
export const Divider = styled.div`
  width: 100%;
  height: 0;
  margin-top: 1.5rem;
  border: 1px solid ${(props) => props.theme['gray-300']};
`
export const BillingResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
const BaseBillingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${(props) => props.theme['gray-700']};
`
export const CoffeePriceContainer = styled(BaseBillingContainer)`
  span {
    font-size: 1rem;
  }
`
export const DeliveryPriceContainer = styled(BaseBillingContainer)`
  span {
    font-size: 1rem;
  }
`
export const TotalPriceContainer = styled(BaseBillingContainer)`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme['gray-800']};
`
export const ConfirmButtonContainer = styled.button`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 0.75rem 0;
  border: 0;
  border-radius: 6px;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.6;
  text-transform: uppercase;

  background: ${(props) => props.theme['yellow-400']};
  color: ${(props) => props.theme.white};
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background: ${(props) => props.theme['yellow-700']};
  }
`
