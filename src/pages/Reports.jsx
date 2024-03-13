import React from 'react';
import Invoice from '../components/Invoice';
import { useState } from 'react';

const Reports = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <div>
      <div className="flex justify-between items-center  my-8 bg-white py-8 px-5 rounded-lg border border-border-stroke shadow-sm ">
        <div>All Invoice </div>
        <div className="flex gap-4">
          <button className="bg-indigo-500 text-sm font-semibold  text-white py-3 px-4 rounded-lg">
            Import Invoice
          </button>
          <button
            className="bg-blue-500 text-sm font-semibold  text-white py-3 px-4 rounded-lg"
            onClick={() => setShowModal(true)}
          >
            Create Invoice
          </button>
        </div>
      </div>
      {showModal && <Invoice closeModal={closeModal} />}
    </div>
  );
};

export default Reports;
