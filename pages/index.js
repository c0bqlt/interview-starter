import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';

const Page = () => {

  return (
      <main>
        <div className='flex align-center justify-center h-screen mx-auto bg-gray-100'>
          <div className='h-96 bg-white w-96 rounded-lg shadow shadow-slate-300 translate-y-1/2'>
            <div>
              <Header />
              <Form />
            </div>
          </div>
        </div>
      </main>
  );
};

export default Page;
