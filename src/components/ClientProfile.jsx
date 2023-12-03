import React from 'react';
import { ClientProfileData } from '../Data/Client';
import { ClientTabs } from '../Data/Client';

const ClientProfile = () => {
  return (
    <div>
      <div className="bg-bg-light-gray">
        <div className="grid grid-cols-12 gap-4  my-4">
          <div className=" col-span-6 bg-white rounded-xl border border-border-stroke p-6">
            {ClientProfileData.map((item, index) => {
              <div
                className="max-w-md px-6 py-4 bg-white  rounded-xl overflow-hidden shadow-lg "
                key={index}
              >
                <p> {item.Address}</p>
              </div>;
            })}
          </div>
          <div className=" col-span-3 bg-white rounded-xl border border-border-stroke p-6">
            <div className="flex justify-between items-center">
              <h1>Notes</h1>
              <p>See all</p>
            </div>
            <textarea
              name="notes"
              id="notes"
              cols="30"
              rows="5"
              placeholder="take all notes here "
            ></textarea>
            <button className="py-2 px-4 rounded-lg bg-bg-purple font-semibold">
              Take Notes
            </button>
            <div>
              <h2>Note-1</h2>
              <p>Note One is available</p>
            </div>
          </div>
          <div className=" col-span-3 bg-white rounded-xl border border-border-stroke p-6">
            <div className="flex justify-end items-center">
              <div>
                <h1 className="text-sm flex font-semibold">File / Document </h1>
              </div>
              <div>
                <input type="file" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-bg-light-gray">
          <div className="grid grid-cols-12 gap-4 my-4 ">
            <div className=" col-span-9 bg-white rounded-xl border border-border-stroke p-6">
              <div className=" flex justify-between items-center mb-6 border-b border-border-stroke dark:border-gray-700">
                <div className="">
                  <ul
                    className="flex text-sm font-medium text-center bg-bg-purple rounded-xl"
                    id="default-tab"
                    data-tabs-toggle="#default-tab-content"
                    role="tablist"
                  >
                    <li className="me-2 " role="presentation">
                      <button
                        className="inline-block  py-2 px-4 my-2 mx-4 rounded-lg  active:bg-white active:text-blue-600"
                        id="profile-tab"
                        data-tabs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="true"
                      >
                        Upcoming Appointment
                      </button>
                    </li>
                    <li className="me-2" role="presentation">
                      <button
                        className="inline-block py-2 px-4 my-2 mx-4 rounded-lg  active:bg-white active:text-blue-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        id="dashboard-tab"
                        data-tabs-target="#dashboard"
                        type="button"
                        role="tab"
                        aria-controls="dashboard"
                        aria-selected="false"
                      >
                        Post Appointment
                      </button>
                    </li>
                    <li className="me-2" role="presentation">
                      <button
                        className="inline-block py-2 px-4 my-2 mx-4 rounded-lg  active:bg-white active:text-blue-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        id="settings-tab"
                        data-tabs-target="#settings"
                        type="button"
                        role="tab"
                        aria-controls="settings"
                        aria-selected="false"
                      >
                        All
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <button className="bg-bg-purple text-sm font-semibold px-4 py-2 rounded-lg">
                    {' '}
                    Add Appointment
                  </button>
                </div>
              </div>

              <div id="default-tab-content">
                <div
                  className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the{' '}
                    <strong className="font-medium text-gray-800 dark:text-white">
                      Profile tab's associated content
                    </strong>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </div>
                <div
                  className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  id="dashboard"
                  role="tabpanel"
                  aria-labelledby="dashboard-tab"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the{' '}
                    <strong className="font-medium text-gray-800 dark:text-white">
                      Dashboard tab's associated content
                    </strong>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </div>
                <div
                  className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  id="settings"
                  role="tabpanel"
                  aria-labelledby="settings-tab"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the{' '}
                    <strong className="font-medium text-gray-800 dark:text-white">
                      Settings tab's associated content
                    </strong>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-span-3 bg-white rounded-xl border border-border-stroke p-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
