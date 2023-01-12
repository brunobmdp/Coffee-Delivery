import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
  width: 23rem;
`
export const CoffeeDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  img {
    height: 4rem;
    width: 4rem;
  }
`
export const CoffeeTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h2 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-800']};
  }
`
export const CoffeeOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  height: 2rem;
`

export const CoffeeAmountContainer = styled.div`
  height: 100%;
  display: flex;
  gap: 0.25rem;
  align-items: center;

  background: ${(props) => props.theme['gray-300']};

  padding: 0.5rem;

  border-radius: 6px;
  svg {
    color: ${(props) => props.theme['purple-400']};
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme['purple-700']};
    }
  }
  p {
    line-height: 1.3;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-900']};
    width: 1.25rem;
    text-align: center;
  }
`
export const RemoveCoffeeContainer = styled.button`
  display: flex;
  height: 100%;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['gray-300']};
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.6;
  cursor: pointer;
  color: ${(props) => props.theme['gray-700']};
  svg {
    color: ${(props) => props.theme['purple-400']};
    line-height: 0;
  }
  &:focus {
    box-shadow: none;
  }
  &:hover {
    background: ${(props) => props.theme['gray-400']};
  }
`
export const PriceContainer = styled.p`
  color: ${(props) => props.theme['gray-700']};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
`
