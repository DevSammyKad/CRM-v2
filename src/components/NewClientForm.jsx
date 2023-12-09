import React from 'react';

const NewClientForm = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="grid gap-6 my-5 max-w-6xl mx-auto border border-border-stroke rounded-2xl p-5 bg-slate-100">
        <form action="#">
          <div className="border border-border-stroke p-6 rounded-2xl my-10 bg-white">
            <p className="text-sm text-red-500 font-semibold pb-2">
              Please be sure to fully and accurately complete all sections of
              the attached form. *
            </p>
            <h1 className="font-semibold text-lg text-blue-500">
              Personal Details
            </h1>
            <div className="grid grid-cols-2 gap-5 my-4">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Fist Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 my-4">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Address"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Area
                </label>
                <input
                  type="text"
                  id="area_second"
                  className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Area"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 my-4">
              <div>
                <label
                  htmlFor="phone_number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill=""
                      viewBox="0 0 19 18"
                    >
                      <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="phone_number"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="sam@email.com"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 my-4">
              <div className="col-1">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Job Profile
                </label>
                <input
                  type="text"
                  id="job_profile"
                  className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Job Profile"
                  required
                />
              </div>
              <div className="col-1">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Age"
                  required
                />
              </div>
              <div className="col-1">
                <label
                  htmlFor="reference_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Reference name
                </label>
                <input
                  type="text"
                  id="reference_name"
                  className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Reference name"
                  required
                />
              </div>
            </div>
          </div>
          <div className="border border-border-stroke p-6 rounded-2xl my-10 bg-white">
            <h1 className="font-semibold text-lg text-blue-500 mb-4">
              Complaint Details
            </h1>
            <div>
              <label
                htmlFor="problem"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an Problem or Other?
              </label>
              <select
                id="problem"
                className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option value="MarrigeProblems" selected>
                  Marrige Problems
                </option>
                <option value="PropertyFraud">Property Fraud</option>
                <option value="DivorceCase">Divorce Case</option>
                <option value="FamilyCounselling">Family Counselling</option>
                <option value="OldAgeHome">Old Age Home</option>
                <option value="BachatGat">Bachat Gat</option>
                <option value="harassment">Harassment</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-5 my-4">
              <div>
                <label
                  htmlFor="opponent_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Opponent name
                </label>
                <input
                  type="text"
                  id="opponent_name"
                  className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Opponent Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor=" Opponent_contact"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Opponent Contact
                </label>
                <input
                  type="tel"
                  id=" Opponent_contact"
                  className="bg-gray-50 border border-border-stroke text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="+ 91"
                  required
                />
              </div>
            </div>
          </div>
          <div className="border border-border-stroke p-6 rounded-2xl my-10  bg-white">
            <h1 className="font-semibold text-lg text-blue-500 mb-4">
              Summary of Case
            </h1>
            <textarea
              className="border border-border-stroke rounded-lg p-4"
              cols="130"
              rows="8"
              placeholder="Write about case "
            ></textarea>
          </div>
          <div className="border border-border-stroke p-6 rounded-2xl my-10  bg-white">
            <h1 className="font-semibold text-lg text-blue-500 mb-4">
              Upload Releted Document
            </h1>
            <div className="flex items-center justify-center w-full mt-4">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-border-stroke border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 my-4">
            <button className="bg-bg-purple py-4 px-6 rounded-xl text-purple-600 font-semibold hover:scale-95">
              Submit
            </button>
            <button
              className="bg-red-300 py-4 px-6 rounded-xl text-red-800 font-semibold hover:scale-95"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewClientForm;
