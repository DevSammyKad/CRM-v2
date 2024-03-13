import React, { useEffect, useState } from 'react';
import person from '../images/person.jpg';
import SvgNote from '../icons/Note';
import SvgCardTick from '../icons/CardTick';
import { AppoitmentData, Transaction } from '../Data/Client';
import Breadcrumbs from './Breadcrumbs';

const ClientProfile = () => {
  const [sortBy, setSortBy] = useState('upcoming');

  const handleSortChange = (type) => {
    setSortBy(type);
  };

  const filteredAppointments = () => {
    const isoCurrentDate = new Date().toISOString().split('T')[0]; // Convert current date to ISO 8601 format
    switch (sortBy) {
      case 'upcoming':
        return AppoitmentData.filter(
          (appointment) =>
            new Date(appointment.Date) >= new Date(isoCurrentDate)
        );
      case 'past':
        return AppoitmentData.filter(
          (appointment) => new Date(appointment.Date) < new Date(isoCurrentDate)
        );
      default:
        return AppoitmentData;
    }
  };

  return (
    <div>
      <div className="bg-transparent">
        <div className="flex justify-between items-center">
          <div>
            <Breadcrumbs />
          </div>
          <div>
            <button className="py-2 px-4  rounded-lg bg-blue-500 text-white font-semibold  ">
              Download Info
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 my-4">
          {/* Profile */}
          <div className="col-span-3 bg-white rounded-xl border border-border-stroke p-6 ">
            <div className="grid grid-cols-4 place-content-around">
              <div className="col-span-1 place-content-center w-full border-r border-border-stroke">
                <div className="flex items-center justify-center flex-col mb-10">
                  <img
                    src={person}
                    alt=""
                    className="w-32 h-32 rounded-full object-cover my-4"
                  />
                  <h1 className="text-2xl font-semibold">Sameer Kad</h1>
                  <h2 className="text-base font-medium text-gray">
                    +91 8459324821
                  </h2>
                  <h1 className="text-lg font-medium my-4 ">Appoitments</h1>
                  <div className="flex justify-between items-center w-3/5 gap-4">
                    <div className="text-center ">
                      <span className="text-2xl font-semibold">8</span>
                      <h1 className="text-base font-medium text-gray"> Past</h1>
                    </div>
                    <div className="text-center ">
                      <span className="text-2xl font-semibold">2</span>
                      <h1 className="text-base font-medium text-gray">
                        {' '}
                        Upcomming
                      </h1>
                    </div>
                  </div>
                  {/* Send Messages */}
                  <div>
                    <button className="py-2 px-4  rounded-lg bg-blue-500 text-white font-semibold mt-10">
                      {' '}
                      Send Messages
                    </button>
                  </div>
                </div>
              </div>
              {/* Profile Discription  */}
              <div className="col-span-3">
                <div className="mx-10 my-5">
                  {/* First Row */}
                  <div className="flex justify-between items-center my-4 w-full">
                    <div className="flex flex-col gap-4  w-[40%]">
                      <h1 className="text-base font-semibold text-gray ">
                        Full Name
                      </h1>
                      <span className="text-base font-semibold">
                        Sameer Dnyaneshwar Kad
                      </span>
                    </div>
                    <div className="flex flex-col gap-4  w-[40%]">
                      <h1 className="text-base font-semibold text-gray">
                        Address
                      </h1>
                      <span className="text-base font-semibold">
                        New Sangvi
                      </span>
                    </div>
                    <div className="flex flex-col gap-4  w-[10%]">
                      <h1 className="text-base font-semibold text-gray">
                        Gender
                      </h1>
                      <span className="text-base font-semibold">Male</span>
                    </div>
                    <div className="flex flex-col gap-4 text-end w-[10%]">
                      <h1 className="text-base font-semibold text-gray">Age</h1>
                      <span className="text-base font-semibold">22</span>
                    </div>
                  </div>
                  <hr className="bg-gray border border-border-stroke mb-10" />
                  {/* Second Row */}
                  <div className="flex justify-between items-center my-4 w-full">
                    <div className="flex flex-col gap-4  w-[40%]">
                      <h1 className="text-base font-semibold text-gray">
                        Opponent Name
                      </h1>
                      <span className="text-base font-semibold">
                        Sameer Kad
                      </span>
                    </div>
                    <div className="flex flex-col gap-4  w-[40%]">
                      <h1 className="text-base font-semibold text-gray">
                        Address
                      </h1>
                      <span className="text-base font-semibold">
                        New Sangvi
                      </span>
                    </div>
                    <div className="flex flex-col gap-4  w-[10%]">
                      <h1 className="text-base font-semibold text-gray">
                        Gender
                      </h1>
                      <span className="text-base font-semibold">Female</span>
                    </div>
                    <div className="flex flex-col gap-4 text-end  w-[10%]">
                      <h1 className="text-base font-semibold text-gray">Age</h1>
                      <span className="text-base font-semibold">22</span>
                    </div>
                  </div>
                  <hr className="bg-gray border border-border-stroke mb-10" />
                  {/* Second Row */}
                  <div className="flex justify-between items-center my-4">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-base font-semibold text-gray">
                        Service Name
                      </h1>
                      <span className="text-base font-semibold">
                        Marrige Problems
                      </span>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h1 className="text-base font-semibold text-gray">
                        Onboarding Date
                      </h1>
                      <span className="text-base font-semibold">
                        22-Jan-2024
                      </span>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h1 className="text-base font-semibold text-gray">
                        Relation
                      </h1>
                      <span className="text-base font-semibold">
                        Husband/Wife
                      </span>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h1 className="text-base font-semibold text-gray">
                        Case Status
                      </h1>
                      <span className="text-base font-semibold bg-red-200 text-red-600 rounded-3xl text-center">
                        Close
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notes  */}
          <div className=" col-span-1 bg-white rounded-xl border border-border-stroke p-6">
            <div className="flex justify-between items-center">
              <h1 className="text-base font-bold flex gap-4">
                <SvgNote />
                Create Notes
              </h1>
              <button className="text-blue-500">See all</button>
            </div>
            <textarea
              name="notes"
              id="notes"
              cols="35"
              rows="5"
              placeholder="Take All Notes here "
              className=" border border-border-stroke outline-none focus:border focus:border-border-stroke py-2 px-4 my-4 rounded-lg "
            ></textarea>
            <button className="py-2 px-4 my-4 rounded-lg bg-blue-500 text-white font-semibold">
              Take Notes
            </button>
            <h2 className="text-sm font-bold">Note-1</h2>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Note One is not available</p>
              </div>
              <div className="text-xs text-gray">20 March 2023</div>
            </div>
          </div>
        </div>
        {/* Appointment Section */}
        <div className="">
          <div className="grid grid-cols-4 gap-4 my-4">
            <div className="col-span-3 bg-white rounded-xl border border-border-stroke p-6">
              {/* Appoitment Header  */}
              <div className="flex justify-between items-center">
                <div className="flex gap-10 items-center justify-center rounded-lg px-8 py-3 bg-slate-200">
                  <button
                    className={`py-2 px-4 rounded-lg bg-transparent ext-blue-500 font-semibold ${
                      sortBy === 'upcoming'
                        ? ' active:bg-white active:text-blue-500 focus:bg-white focus:text-blue-500 font-semibold'
                        : 'text-slate-600'
                    } `}
                    onClick={() => handleSortChange('upcoming')}
                  >
                    Upcoming Appointments
                  </button>
                  <button
                    className={`py-2 px-4 rounded-lg bg-transparent text-slate-600 font-semibold ${
                      sortBy === 'past'
                        ? 'active:bg-white active:text-blue-500 focus:bg-white focus:text-blue-500'
                        : 'text-slate-600'
                    }`}
                    onClick={() => handleSortChange('past')}
                  >
                    Past Appointments
                  </button>
                  <button
                    className={`py-2 px-4 rounded-lg bg-transparent text-slate-600 font-semibold ${
                      sortBy === 'all'
                        ? 'active:bg-white active:text-blue-500 focus:bg-white focus:text-blue-500'
                        : 'text-slate-600'
                    }`}
                    onClick={() => handleSortChange('all')}
                  >
                    All Appointments
                  </button>
                </div>
                <div>
                  <button className="py-2 px-4  rounded-lg bg-blue-500 text-white font-semibold  ">
                    {' '}
                    Add Appointment
                  </button>
                </div>
              </div>
              {/* Appoitment Timeline  */}
              <div className="bg-slate-200 my-10 rounded-md p-4">
                {filteredAppointments().map((item, index) => {
                  return (
                    <div key={index} className="bg-white rounded-lg">
                      <div className=" m-4 p-4 flex justify-between items-center text-center">
                        <div className="text-start">
                          <h1 className="text-base font-semibold">
                            {item.Date}
                          </h1>
                          <span className="text-sm text-slate-500 font-semibold">
                            {item.Time}
                          </span>
                        </div>
                        <div className="">
                          <h1 className="text-sm text-slate-500 font-semibold">
                            Type
                          </h1>
                          <span className="text-base font-semibold">
                            {item.Type}
                          </span>
                        </div>
                        <div className="">
                          <h1 className="text-sm text-slate-500 font-semibold">
                            Consultant
                          </h1>
                          <span className="text-base font-semibold">
                            {item.Consultant}
                          </span>
                        </div>
                        <div className="">
                          <h1 className="text-sm text-slate-500 font-semibold">
                            Consultant
                          </h1>
                          <span className="text-base font-semibold">
                            {item.Consultant}
                          </span>
                        </div>
                        <div className="flex gap-3">
                          <h1 className="text-blue-500 font-semibold text-base ">
                            Notes
                          </h1>
                          <SvgNote />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Payment Section */}
            <div className=" col-span-1 bg-white rounded-xl border border-border-stroke p-6">
              <div>
                <h1 className="text-base font-bold flex gap-4">
                  <SvgCardTick /> Payments
                </h1>
                <div className="flex justify-between items-center my-5">
                  <h4 className="text-sm font-semibold text-gray">
                    Transaction
                  </h4>
                  <h4 className="text-sm font-semibold text-gray">Amount</h4>
                </div>
                {Transaction.map((item, index) => {
                  let statusColor;

                  switch (item.Status) {
                    case 'Paid':
                      statusColor = 'bg-green-400';
                      break;
                    case 'Due':
                      statusColor = 'bg-orange-400';
                      break;
                    case 'Failed':
                      statusColor = 'bg-red-400';
                      break;

                    default:
                      statusColor = 'bg-gray-400';
                      break;
                  }
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center my-5"
                    >
                      <div className="flex gap-3 items-center">
                        <div
                          className={`rounded-full w-3 h-2 ${statusColor}`}
                        ></div>
                        <h4 className="text-sm font-bold ">{item.reason}</h4>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold ">{item.Amount}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className=" grid grid-cols-3 gap-4 ">
          <div className="col-span-3 bg-white rounded-xl border border-border-stroke p-6">
            <div>
              <h1 className="text-blue-500 text-lg font-semibold">Documents</h1>
            </div>
            <div></div>
          </div>
          <div className=" bg-white rounded-xl border border-border-stroke p-6"></div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
