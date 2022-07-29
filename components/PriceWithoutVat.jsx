import React from 'react'

const PriceWithoutVat = ({ price, setValues, values }) => {

    const handlePriceChange = (e) => {
        let aux = e.target.value
        setValues({
          ...values,
          price: aux,
          priceWithVat: Math.floor(aux * (1 + values.vat / 100))
        })
      }

  return (
    <div className='pb-6'>
    <label>
    <span className="font-medium text-slate-700 pb-2">Price without VAT:</span> <br />
    <input
    type="number"
     name="price"
     className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow h-8'
     value={price}
     onChange={handlePriceChange}
      />
  </label></div>
  )
}

export default PriceWithoutVat
