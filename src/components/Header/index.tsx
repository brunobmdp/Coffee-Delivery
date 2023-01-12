import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
import { OrderContext } from '../../context/OrderContext'
import {
  HeaderContainer,
  NavAddress,
  NavCart,
  NotificationCart,
} from './styles'

export function Header() {
  const { order, costumerInfo } = useContext(OrderContext)

  const isCartWithItens = order.length > 0
  const city = costumerInfo.city ? costumerInfo.city : 'São Paulo'
  const state = costumerInfo.state ? costumerInfo.state : 'SP'

  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="home">
          <img src={logo} alt="coffee logo" />
        </NavLink>
        <div>
          <NavAddress>
            <MapPin size={22} weight="fill" />
            <p>
              {city}, {state}
            </p>
          </NavAddress>
          <NavLink to="/checkout">
            <NavCart>
              {isCartWithItens ? (
                <>
                  <ShoppingCart size={22} weight="fill" />
                  <NotificationCart>{order.length}</NotificationCart>
                </>
              ) : (
                <ShoppingCart size={22} weight="fill" />
              )}
            </NavCart>
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}
