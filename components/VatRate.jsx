import React from 'react'

const VatRate = ({ setValues, values}) => {

    const handleVatChange = (e) => {
        let aux = e.target.value
        setValues({
          ...values,
          vat: aux,
          priceWithVat: Math.floor(values.price * ( 1 + aux / 100))
        });
      };

  return (
    <div className='pb-6'>
        <label className='self-start'>
                <span className="font-medium text-slate-700 pb-2 left-0">VAT: <br /></span>
                <select
                name='vat'
                className='w-52 border border-slate-200 rounded-lg px-3 py-3 focus:outline-none focus:border-slate-500 hover:shadow h-8'
                onChange={handleVatChange}
                >
                  <option value={5}>5%</option>
                  <option value={9}>9%</option>
                  <option value={19}>19%</option>
                </select>
              </label>
    </div>
  )
}

export default VatRate
