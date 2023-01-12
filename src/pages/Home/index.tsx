import { CoffeeCardLayout, CoffeeListContainer, HomeContainer } from './styles'

import { Intro } from './components/Intro'
import { CoffeeCard } from './components/CoffeeCard'

import { cafeList } from '../../data/coffeeList'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeListContainer>
        <h1>Nossos cafés</h1>
        <CoffeeCardLayout>
          {cafeList.map((coffee) => {
            return <CoffeeCard coffeeType={coffee} key={coffee.id} />
          })}
        </CoffeeCardLayout>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
