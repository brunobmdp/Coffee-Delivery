import { createContext, useContext, useEffect } from 'react'
import { FormState, useForm, UseFormRegister } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Address } from './components/Address'
import { Billing } from './components/Billing'
import { Cart } from './components/Cart'
import {
  CartInfoContainer,
  CheckoutContainer,
  CustomerInfoContainer,
} from './styles'
import { OrderContext } from '../../context/OrderContext'
import cep from 'cep-promise'

const newAddressFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, 'Informe o cep corretamente')
    .max(8, 'Informe o cep corretamente'),
  city: zod.string().min(1, 'Informe a cidade'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Informe o bairro'),
  number: zod.string().min(1, 'Informe o numero'),
  paymentType: zod.string(),
  state: zod
    .string()
    .min(1, 'Informe a UF corretamente')
    .max(2, 'Informe a UF corretamente'),
  street: zod.string().min(1, 'Informe a rua corretamente'),
})
type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>

interface AddressContextType {
  register: UseFormRegister<NewAddressFormData>
  formState: FormState<NewAddressFormData>
  handleConfirmPurchase: () => void
}

export const AddressContext = createContext({} as AddressContextType)

export function Checkout() {
  const { costumerInfo, handleCheckoutInformation } = useContext(OrderContext)
  const { register, handleSubmit, watch, setValue, formState } =
    useForm<NewAddressFormData>({
      resolver: zodResolver(newAddressFormValidationSchema),
      defaultValues: {
        cep: costumerInfo.cep,
        city: costumerInfo.city,
        complement: costumerInfo.complement,
        district: costumerInfo.district,
        number: costumerInfo.number,
        paymentType: costumerInfo.paymentType,
        state: costumerInfo.state,
        street: costumerInfo.street,
      },
    })

  function handleAddressInformation(data: NewAddressFormData) {
    handleCheckoutInformation(data)
  }

  function handleConfirmPurchase() {
    const formAddress = document.getElementById(
      'AddressForm',
    ) as HTMLFormElement

    formAddress.requestSubmit()
  }

  const cepInput = watch('cep')

  useEffect(() => {
    if (cepInput.length === 8) {
      cep(cepInput).then((data) => {
        setValue('cep', data.cep)
        setValue('city', data.city)
        setValue('district', data.neighborhood)
        setValue('state', data.state)
        setValue('street', data.street)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cepInput])

  return (
    <CheckoutContainer
      onSubmit={handleSubmit(handleAddressInformation)}
      id="AddressForm"
    >
      <AddressContext.Provider
        value={{ register, handleConfirmPurchase, formState }}
      >
        <CustomerInfoContainer>
          <h1>Complete seu pedido</h1>
          <Address />

          <Billing />
        </CustomerInfoContainer>
        <CartInfoContainer>
          <h1>Cafés selecionados</h1>
          <Cart />
        </CartInfoContainer>
      </AddressContext.Provider>
    </CheckoutContainer>
  )
}
