import React from 'react';
import { ClientProfileData } from '../Data/Client';
import { ClientTabs } from '../Data/Client';

const ClientProfile = () => {
  return (
    <div>
      {ClientProfileData.map((item, index) => (
        <div
          className="max-w-md px-6 py-4 bg-white  rounded-xl overflow-hidden shadow-lg "
          key={index}
        >
          <div className="flex flex-col justify-between ">
            <div className="flex justify-center my-4">
              <img
                src="https://www.commontools.org/articles/images/76/1.svg"
                alt=""
                className="w-40 h-40 rounded-full overflow-hidden "
              />
            </div>
            <div className="grid grid-cols-2 gap-2 my-2">
              <h1 className="mr-2 text-gray font-semibold ">ID : </h1>
              <p>{item.ID}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2">
              <h1 className="mr-2 text-gray font-semibold ">Name : </h1>
              <p>{item.Name}</p>
            </div>

            <div className="grid grid-cols-2 gap-2  my-2">
              <h1 className="mr-2 text-gray font-semibold ">Email : </h1>
              <p>{item.Email}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2">
              <h1 className="mr-2 text-gray font-semibold ">
                Another Number :
              </h1>
              <p>{item.AnotherNumber}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2">
              <h1 className="mr-2 text-gray font-semibold">Age : </h1>
              <p>{item.age}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2">
              <h1 className="mr-2 text-gray font-semibold">Date Of Birth : </h1>
              <p>{item.DateOfBirth}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2">
              <h1 className="mr-2 text-gray font-semibold">Gender : </h1>
              <p>{item.Gender}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2">
              <h1 className="mr-2 text-gray font-semibold">Service : </h1>
              <p>{item.Service}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2">
              <h1 className="mr-2 text-gray font-semibold">Job Profile : </h1>
              <p>{item.JobProfile}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2">
              <h1 className="mr-2 text-gray font-semibold">
                AdharCard / Pancard :
              </h1>
              <p>{item.adharCardPancard}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2">
              <h1 className="mr-2 text-gray font-semibold">Referrals : </h1>
              <p>{item.Referrals}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2">
              <h1 className="mr-2 text-gray font-semibold">Opponents : </h1>
              <p>{item.Opponents}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2">
              <h1 className="mr-2 text-gray font-semibold">Onboard Date : </h1>
              <p>{item.OnboardDate}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2">
              <h1 className="mr-2 text-gray font-semibold">Current Status :</h1>
              <p>{item.CurrentStatus}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2">
              <h1 className="mr-2 text-gray font-semibold">Payment Status :</h1>
              <p>{item.PaymentStatus}</p>
            </div>
            <hr className="w-3/4 mx-auto border my-3 bg-gray-light" />
            <div className="text-center my-3">
              <a href="tel:8459324821">Call Now :</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientProfile;
