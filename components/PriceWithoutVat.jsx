import React from 'react';

const PriceWithoutVat = () => {
  return (
    <div className="flex flex-col">
      <label>Price without VAT</label>
      <input
        type="text"
        className="border border-gray-400 rounded px-2 py-2 w-full leading-none bg-white"
      />
    </div>
  );
};

export default PriceWithoutVat;
