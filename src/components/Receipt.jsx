import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Receipt = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    receipt_id: '',
    Client_name: '',
    Phone_number: '',
    receipt_date: '',
    payment_mode: '',
    reference_no: '',
    deposit_to: '',
    amount_received: '',
    receipt_note: '',
  });

  const capitalizeFirstLetter = (value) => {
    return value
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    // If the input is the date field, handle it separately
    if (id === 'receipt_date') {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];
      setFormData((prevData) => ({
        ...prevData,
        receipt_date: formattedDate,
      }));
    } else {
      // For other inputs, update the state as usual
      setFormData((prevData) => ({
        ...prevData,
        [id]: id === 'Client_name' ? capitalizeFirstLetter(value) : value,
      }));
    }
  };

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    setFormData((prevData) => ({
      ...prevData,
      receipt_date: formattedDate,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/create-receipt',
        formData
      );
      toast.success('Lead submitted successfully!');

      // You can now access the form data in the formData state
      console.log('Form Data:', JSON.stringify(formData, null, 2));

      // Add logic to send the data to the server or perform other actions
    } catch (error) {
      console.error('error to submit', error);

      toast.error('Error submitting form. Please try again.');
    }
  };

  return (
    <div>
      <div className="bg-white border border-border-stroke p-10 rounded-lg">
        <form action="">
          {/* First Section */}
          <div className="grid grid-cols-4 gap-10 ">
            <div className="grid ">
              <label
                htmlFor="receipt_id"
                className="text-base font-normal mb-1 ml-2 text-black"
              >
                Receipt ID
              </label>
              <input
                type="text"
                id="receipt_id"
                value={formData.receipt_id}
                onChange={handleChange}
                placeholder="Receipt Id"
                className="border border-border-stroke outline-none py-2 px-4 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:text-white block w-full  "
              />
            </div>
            <div className="grid ">
              <label
                htmlFor="Client_name"
                className="text-base font-normal mb-1 ml-2 text-black "
              >
                Client Name
              </label>
              <input
                type="text"
                id="Client_name"
                value={formData.Client_name}
                onChange={handleChange}
                placeholder="Client Name"
                className="border border-border-stroke outline-none py-2 px-4 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:text-white block w-full  "
              />
            </div>
            <div className="grid ">
              <label
                htmlFor="Phone_number"
                className="text-base font-normal mb-1 ml-2 text-black "
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="Phone_number"
                value={formData.Phone_number}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border border-border-stroke outline-none py-2 px-4 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:text-white block w-full  "
              />
            </div>
            <div className="grid ">
              <h1 className="text-xl font-semibold mb-1 ml-2 text-black">
                Amount Received
              </h1>
              <h5>₹{}</h5>
            </div>
          </div>
          <div className="grid grid-cols-5  gap-10 mt-10">
            <div className="grid ">
              <label
                htmlFor="receipt_date"
                className="text-base font-normal mb-1 ml-2 text-black "
              >
                Receipt Date
              </label>
              <input
                type="date"
                id="receipt_date"
                value={formData.receipt_date}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border border-border-stroke outline-none py-2 px-4 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:text-white block w-full  "
              />
            </div>
            <div className="grid ">
              <label
                htmlFor="payment_mode"
                className="text-base font-normal mb-1 ml-2 text-black "
              >
                Select Payment Mode
              </label>

              <select
                name="payment_mode"
                id="payment_mode"
                value={formData.payment_mode}
                onChange={handleChange}
                className="border border-border-stroke outline-none py-2 px-4
              rounded-md focus:ring-blue-500 focus:border-blue-500
              dark:text-white block w-full "
              >
                <option value="Cash" default>
                  Cash
                </option>
                <option value="UPI">UPI</option>
                <option value="Cheque">Cheque</option>
                <option value="N/A">N/A</option>
              </select>
            </div>
            <div className="grid ">
              <label
                htmlFor="reference_no"
                className="text-base font-normal mb-1 ml-2 text-black "
              >
                Reference No
              </label>
              <input
                type="text"
                id="reference_no"
                value={formData.reference_no}
                onChange={handleChange}
                placeholder="Enter Transactions Number"
                className="border border-border-stroke outline-none py-2 px-4 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:text-white block w-full  "
              />
            </div>
            <div className="grid ">
              <label
                htmlFor="deposit_to"
                className="text-base font-normal mb-1 ml-2 text-black "
              >
                Deposit to
              </label>

              <select
                id="deposit_to"
                value={formData.deposit_to}
                onChange={handleChange}
                className="border border-border-stroke outline-none py-2 px-4
              rounded-md focus:ring-blue-500 focus:border-blue-500
              dark:text-white block w-full "
              >
                <option value="Palavi" default>
                  Palavi
                </option>
                <option value="unknown">Unknown</option>
              </select>
            </div>
            <div className="grid ">
              <label
                htmlFor="amount_received"
                className="text-base font-normal mb-1 ml-2 text-black "
              >
                Amount Received (₹)
              </label>
              <input
                type="number"
                id="amount_received"
                value={formData.amount_received}
                onChange={handleChange}
                placeholder="Enter Received Amount (₹)"
                className="border border-border-stroke outline-none py-2 px-4 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:text-white block w-full  "
              />
            </div>
          </div>
          <div className="grid  mt-10">
            <div className="grid ">
              <label
                htmlFor="receipt_note"
                className="text-base font-normal mb-1 ml-2 text-black"
              >
                Receipt Note
              </label>
              <textarea
                id="receipt_note"
                value={formData.receipt_note}
                onChange={handleChange}
                className="border border-border-stroke outline-none py-2 px-4 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:text-white block w-full  "
                cols="30"
                rows="6"
                placeholder="Write your Note for this Receipt. "
              ></textarea>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="text-left">
              <button
                className=" py-2 px-4 rounded-md b border border-blue-500 text-sm font-semibold hover:text-white hover:bg-blue-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
            <div className="text-right">
              <button
                className="  py-2 px-4 rounded-md b border border-blue-500 text-sm font-semibold hover:text-white hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Save
              </button>
              <button className="  ml-3 py-2 px-4 rounded-md b border border-blue-500 text-sm font-semibold hover:text-white hover:bg-blue-600">
                Save & Next
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Receipt;
