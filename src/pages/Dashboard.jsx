import React from 'react';
import { OverViewCards } from '../Data/Dashboard';

const Dashboard = () => {
  return (
    <div className="bg-bg-light-gray">
      <div className=" grid xl:grid-cols-4 gap-10 sm:grid-cols-2 px-3 mt-10">
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
    </div>
  );
};

export default Dashboard;
