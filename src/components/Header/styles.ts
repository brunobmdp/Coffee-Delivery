import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;

  background: ${(props) => props.theme.background};
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 18rem;
  }
  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
  a {
    text-decoration: none;
    &:focus {
      box-shadow: none;
    }
  }
`
const NavButton = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
`

export const NavAddress = styled(NavButton)`
  color: ${(props) => props.theme['purple-400']};
  background: ${(props) => props.theme['purple-100']};
  p {
    color: ${(props) => props.theme['purple-700']};
  }
`
export const NavCart = styled(NavButton)`
  color: ${(props) => props.theme['yellow-400']};
  background: ${(props) => props.theme['yellow-100']};
`
export const NotificationCart = styled.div`
  position: fixed;
  margin-top: -2rem;
  margin-right: -2rem;
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme['yellow-700']};
  padding: 0.125rem;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 0;
  width: 1.25rem;
  height: 1.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
`
