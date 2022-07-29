import React from 'react';

const SubmitButton = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // var req = new XMLHttpRequest();
    // req.open('POST', '/endpoint', true);
    // req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    // req.send(data);
  };

  return (
    <div>
      <button
        onClick={handleSubmit}
        className="bg-indigo-600 text-white rounded-xl w-52 h-10 ease-in duration-150"
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
