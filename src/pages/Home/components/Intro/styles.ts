import styled from 'styled-components'

export const IntroContainer = styled.div`
  width: 100%;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 34rem;
    padding: 0 18rem;
  }
  > img {
    width: 100%;

    position: static;
    margin-bottom: -45rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36.75rem;
  gap: 1rem;
  h1 {
    font-size: 3rem;
    font-weight: 800;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.3;
  }
`
export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  columns: 2;
  list-style-type: none;
  margin-top: 4.125rem;
  max-height: 5.25rem;
  gap: 1.25rem;
`
const BaseIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 90%;
  color: ${(props) => props.theme.background};
`

export const ItemsContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`
export const ShoppingIconContainer = styled(BaseIcon)`
  background-color: ${(props) => props.theme['yellow-700']};
`
export const TimerIconContainer = styled(BaseIcon)`
  background-color: ${(props) => props.theme['yellow-400']};
`
export const BoxIconContainer = styled(BaseIcon)`
  background-color: ${(props) => props.theme['gray-700']};
`
export const CoffeeIconContainer = styled(BaseIcon)`
  background-color: ${(props) => props.theme['purple-400']};
`
