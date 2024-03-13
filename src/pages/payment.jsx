import React, { useState } from 'react';
import Receipt from '../components/Receipt';

const Payment = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      {' '}
      <div className="flex justify-between items-center my-8 bg-white py-8 px-5 rounded-lg border border-border-stroke shadow-sm ">
        <div>All Payment </div>
        <div className="flex gap-4">
          <button
            className="bg-indigo-500 text-sm font-semibold  text-white py-3 px-4 rounded-lg shadow-xl"
            onClick={() => setShowModal(true)}
          >
            New Payment
          </button>
          <button className="bg-blue-500 text-sm font-semibold  text-white py-3 px-4 rounded-lg shadow-xl">
            Export Payment
          </button>
        </div>
      </div>
      {showModal && <Receipt closeModal={closeModal} />}
    </div>
  );
};

export default Payment;
