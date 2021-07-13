import React from 'react';

const VatRate = () => {
  return (
    <div className="flex flex-col">
      <label>VAT rate</label>
      <select className="border border-gray-400 rounded px-2 py-2 w-full leading-none bg-white">
        <option value="0">0%</option>
        <option value="5">5%</option>
        <option value="9">9%</option>
        <option value="19">19%</option>
      </select>
    </div>
  );
};

export default VatRate;
