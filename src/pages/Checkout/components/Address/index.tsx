import { MapPinLine } from 'phosphor-react'
import { useContext } from 'react'

import { AddressContext } from '../..'

import {
  AddressComplementInput,
  AddressContainer,
  AddressInfoContainer,
  CepInput,
  CityInput,
  DistrictInput,
  HouseNumberInput,
  InputSeparatorContainer,
  StateInput,
  StreetInput,
  TitleContainer,
} from './styles'

export function Address() {
  const { register } = useContext(AddressContext)

  return (
    <AddressContainer>
      <TitleContainer>
        <MapPinLine size={22} />
        <div>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </TitleContainer>
      <AddressInfoContainer>
        <CepInput
          type="text"
          placeholder="CEP"
          maxLength={8}
          {...register('cep')}
        />
        <StreetInput type="text" placeholder="Rua" {...register('street')} />
        <InputSeparatorContainer>
          <HouseNumberInput
            type="text"
            placeholder="Número"
            {...register('number')}
          />

          <AddressComplementInput
            id="complemento"
            type="text"
            placeholder="Complemento (Opcional)"
            {...register('complement')}
          />
        </InputSeparatorContainer>
        <InputSeparatorContainer>
          <DistrictInput
            type="text"
            placeholder="Bairro"
            {...register('district')}
          />
          <CityInput type="text" placeholder="Cidade" {...register('city')} />
          <StateInput
            type="text"
            placeholder="UF"
            maxLength={2}
            {...register('state')}
          />
        </InputSeparatorContainer>
      </AddressInfoContainer>
    </AddressContainer>
  )
}
