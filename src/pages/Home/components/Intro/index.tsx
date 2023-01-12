import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import {
  BoxIconContainer,
  CoffeeIconContainer,
  IntroContainer,
  ItemsContainer,
  ListContainer,
  ShoppingIconContainer,
  TimerIconContainer,
  TitleContainer,
} from './styles'
import banner from '../../../../assets/banner.svg'
import backgroundImage from '../../../../assets/Background.svg'

export function Intro() {
  return (
    <IntroContainer>
      <img src={backgroundImage} alt="" />
      <div>
        <div>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleContainer>
          <ListContainer>
            <ItemsContainer>
              <ShoppingIconContainer>
                <ShoppingCart size={16} weight="fill" />
              </ShoppingIconContainer>
              <p>Compra simples e segura</p>
            </ItemsContainer>
            <ItemsContainer>
              <TimerIconContainer>
                <Timer size={16} weight="fill" />
              </TimerIconContainer>
              <p>Entrega rápida e rastreada</p>
            </ItemsContainer>
            <ItemsContainer>
              <BoxIconContainer>
                <Package size={16} weight="fill" />
              </BoxIconContainer>
              <p>Embalagem mantém o café intacto</p>
            </ItemsContainer>
            <ItemsContainer>
              <CoffeeIconContainer>
                <Coffee size={16} weight="fill" />
              </CoffeeIconContainer>
              <p>O café chega fresquinho até você</p>
            </ItemsContainer>
          </ListContainer>
        </div>
        <img src={banner} alt="" />
      </div>
    </IntroContainer>
  )
}
