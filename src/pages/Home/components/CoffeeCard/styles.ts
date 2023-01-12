import styled from 'styled-components'

export const CoffeeContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme['gray-100']};
  width: 16rem;
  border-radius: 6px 36px;
  padding: 1.25rem;
  img {
    margin-top: -2.5rem;
    width: 7.5rem;
    height: 7.5rem;
  }
`
export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-top: 0.75rem;
  width: 100%;
  > span {
    color: ${(props) => props.theme['yellow-700']};
    font-weight: 700;
    font-size: 0.625rem;
    background: ${(props) => props.theme['yellow-100']};
    text-transform: uppercase;
    line-height: 1.3;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`
export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  margin-top: 1rem;
  h1 {
    font-weight: 700;
    font-size: 1.25rem;
  }
  p {
    font-weight: 400;
    line-height: 1.3;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
  }
`
export const BuyContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const PriceContainer = styled.div`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.3;
  color: ${(props) => props.theme['gray-700']};

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`
export const CoffeeInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background: ${(props) => props.theme['gray-300']};
  padding: 0 0.5rem;
  height: 2.375rem;
  border-radius: 6px;
  svg {
    color: ${(props) => props.theme['purple-400']};
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme['purple-700']};
    }
  }
`
export const CoffeeAmountInput = styled.span`
  text-align: center;
  line-height: 1.3;
  font-size: 1rem;
  color: ${(props) => props.theme['gray-900']};
  width: 1.25rem;
`
export const CoffeeCartButton = styled.button`
  line-height: 0;
  border: 0;
  padding: 0.5rem;
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme['purple-700']};
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme['purple-400']};
  }
  &:focus {
    box-shadow: none;
    background: ${(props) => props.theme['purple-400']};
  }
`
