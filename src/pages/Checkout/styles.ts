import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  padding: 2.5rem 18rem;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  h1 {
    color: ${(props) => props.theme['gray-800']};
    font-weight: 700;
    font-size: 1.125rem;
  }
`
const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`
export const CustomerInfoContainer = styled(BaseCard)`
  width: 40rem;
`
export const CartInfoContainer = styled(BaseCard)`
  width: 28rem;
`
