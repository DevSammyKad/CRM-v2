import React from 'react';
import { Transaction } from '../Data/Client';

const Payment = () => {
  return (
    <div>
      <header>
        <div>
          <h1>Payment History</h1>
        </div>
      </header>
      <div className="mt-4 w-full border border-border-stroke rounded-lg p-5 bg-white">
        <table className=" table-auto flex flex-col mt-6 bg-white w-full">
          <thead className="px-6 py-4 mt-7">
            <tr className="font-semibold py-4 px-6 bg-bg-purple flex justify-between items-center">
              <td className="">Transaction</td>
              <td className="">Amount</td>
              <td className="">Status</td>
              <td className="">Date</td>
            </tr>
          </thead>

          <tbody className="flex flex-col ">
            {Transaction.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="px-6 py-4 border-b border-border-stroke flex justify-between items-center"
                >
                  <td className="text-[#84878d] text-sm font-light">
                    <span>{item.Id} </span>
                  </td>
                  <td className="text-[#84878d] text-sm font-light">
                    <span>{item.Amount} INR</span>
                  </td>
                  <td className="text-[#84878d] text-sm font-light">
                    <span> {item.Status}</span>
                  </td>
                  <td className="text-[#84878d] text-sm font-light">
                    {item.Date}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
