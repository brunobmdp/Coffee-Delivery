import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`
export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
  padding: 2rem 18rem;
  h1 {
    color: ${(props) => props.theme['gray-800']};
    font-weight: 800;
    font-size: 2rem;
  }
`
export const CoffeeCardLayout = styled.div`
  display: flex;
  gap: 6rem;
  flex-wrap: wrap;
`
