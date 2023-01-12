import styled from 'styled-components'

export const BillingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['gray-100']};
  padding: 2.5rem;
  border-radius: 6px;
  gap: 2rem;
`
export const TitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  svg {
    color: ${(props) => props.theme['purple-400']};
  }
  h2 {
    color: ${(props) => props.theme['gray-800']};
    font-weight: 400;
    line-height: 1.3;
    font-size: 1rem;
  }

  p {
    color: ${(props) => props.theme['gray-700']};
    font-weight: 400;
    line-height: 1.3;
    font-size: 0.875rem;
  }
`

export const PaymentOptionsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.75rem;
`
export const PaymentInputContainer = styled.input`
  display: none;
  &:checked + label {
    background: ${(props) => props.theme['purple-100']};
    border: 1px solid ${(props) => props.theme['purple-400']};
    margin: -1px;
  }
`
export const PaymentButtonContainer = styled.label`
  display: flex;
  gap: 0.75rem;
  flex: 1;
  padding: 1rem;
  background: ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme['purple-400']};
    line-height: 0;
  }
  p {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
  }

  &:hover {
    background: ${(props) => props.theme['gray-400']};
  }
`
