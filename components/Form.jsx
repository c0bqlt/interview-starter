import React, { useState } from 'react'
import PriceWithoutVat from '../components/PriceWithoutVat';
import PriceWithVat from '../components/PriceWithVat';
import SubmitButton from '../components/SubmitButton';
import VatRate from '../components/VatRate';

const Form = () => {

    const initialValues = {price: 0, vat: 5, priceWithVat: 0};
    const [values, setValues] = useState(initialValues);
    
  return (
    <form className='flex flex-col items-center justify-center'>
    <PriceWithoutVat price={values.price} setValues={setValues} values={values}/>
    <VatRate setValues={setValues} values={values}/>
    <PriceWithVat priceWithVat={values.priceWithVat} setValues={setValues} values={values}/>
    <SubmitButton />
  </form>
  )
}

export default Form