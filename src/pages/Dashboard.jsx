import React from 'react';

import NewClientForm from '../components/NewClientForm';
import { OverViewCards } from '../Data/Dashboard';
import { useState } from 'react';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  <NewClientForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />;

  return (
    <div>
      <div className="my-5 w-full border border-border-stroke rounded-lg p-5 bg-white flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-xl my-3">Dashboard Overview</h1>
          <p className="text-lg text-gray font-light font-sans tracking-wide leading-4">
            Welcome to Your Counseling Services Dashboard
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-bg-purple py-4 px-6 rounded-lg text-text-purple font-semibold active:scale-90 "
          >
            Add New Client
          </button>
          <button className="bg-light-green py-4 px-6 rounded-lg text-dark-green font-semibold active:scale-90 ">
            Download File
          </button>
        </div>
      </div>
      <div className=" grid xl:grid-cols-4 gap-10 sm:grid-cols-2 px-3 mt-24">
        {OverViewCards.map((item, index) => {
          return (
            <div
              key={index}
              className=" mx flex text-center items-center cursor-pointer text-gray-dark p-4 transition duration-300 bg-bg-menu hover:shadow-lg rounded-2xl "
            >
              <div className="relative">
                <item.icon
                  className="mx-4 bg-bg-purple rounded-full p-3 hover:text-text-purple absolute  left-[-20px] bottom-10"
                  style={{ width: '85px', height: '85px' }}
                />
              </div>
              <div className="flex flex-col ">
                <h1 className=" font-semibold text-4xl ml-24"> {item.count}</h1>
                <span className=" font-semibold text-2xl ml-30 mt-10 text-text-purple py-2">
                  {item.Heading}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <NewClientForm />
    </div>
  );
};

export default Dashboard;
