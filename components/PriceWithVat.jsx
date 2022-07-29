import React from 'react'

const PriceWithVat = ({priceWithVat, setValues, values}) => {

    const handlePriceWithVatChange = (e) => {
        let aux = e.target.value
        setValues({
          ...values,
          priceWithVat: aux,
          price:  Math.floor(aux / (1 + values.vat / 100))
        })
      }

  return (
    <div className='pb-6'>
        <label>
                <span className="font-medium text-slate-700 pb-2">Price with VAT:</span> <br />
                <input
                type="number"
                 name="priceWithVat"
                 className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow h-8'
                 value={priceWithVat}
                 onChange={handlePriceWithVatChange}
                  />
              </label>
    </div>
  )
}

export default PriceWithVat
