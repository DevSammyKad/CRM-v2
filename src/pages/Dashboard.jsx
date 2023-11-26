import React from 'react';
import { OverViewCards } from '../Data/Dashboard';

const Dashboard = () => {
  return (
    <div className=" grid grid-cols-4 gap-3 px-3">
      {OverViewCards.map((item, index) => {
        return (
          <div
            key={item.heading}
            className=" mx flex text-center items-center cursor-pointer text-gray-dark p-4 ease-in-out hover:text-purple bg-bg-menu rounded-xl "
          >
            <div>
              <item.icon
                className="mx-4"
                style={{ width: '55px', height: '55px' }}
              />
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-lg font-semibold"> {item.count}</h1>
              <span className="text-lg font-semibold"> {item.Heading}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
