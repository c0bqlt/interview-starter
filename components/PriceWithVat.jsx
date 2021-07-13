import React from 'react';

const PriceWithVat = () => {
  return (
    <div className="flex flex-col">
      <label>Price with VAT</label>
      <input
        type="text"
        className="border border-gray-400 rounded px-2 py-2 w-full leading-none bg-white"
      />
    </div>
  );
};

export default PriceWithVat;
