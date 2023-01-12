import styled from 'styled-components'

export const AddressContainer = styled.div`
  width: 100%;
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
    color: ${(props) => props.theme['yellow-700']};
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
export const AddressInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const InputSeparatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
`

const BaseInput = styled.input`
  background: ${(props) => props.theme['gray-200']};
  border: 1px solid ${(props) => props.theme['gray-300']};
  padding: 0.75rem;
  border-radius: 4px;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${(props) => props.theme['gray-700']};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3;

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }
`
export const CepInput = styled(BaseInput)`
  width: 12.5rem;
`
export const StreetInput = styled(BaseInput)`
  width: 100%;
`
export const HouseNumberInput = styled(BaseInput)`
  width: 12.5rem;
`
export const AddressComplementInput = styled(BaseInput)`
  flex: 1;
`
export const DistrictInput = styled(BaseInput)`
  width: 12.5rem;
`
export const CityInput = styled(BaseInput)`
  flex: 1;
`
export const StateInput = styled(BaseInput)`
  width: 3.75rem;
  text-transform: uppercase;
`
