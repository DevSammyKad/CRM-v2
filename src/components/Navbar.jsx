// Navbar.js
import React from 'react';
// import Logo from '../images/logo.jpg';
import Logo from '../icons/Logo';
import person from '../images/person.jpg';
import SvgDark from '../icons/Dark';
import SvgNotificationBing from '../icons/NotificationBing';
import SvgSearchStatus from '../icons/SearchStatus';
import SvgChevronDown from '../icons/ChevronDown';

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="h-24 flex justify-between items-center mx-8 ">
          <div className="flex items-center gap-4">
            <Logo className="rounded-full w-11 flex justify-center items-center mx-2 object-cover object-center " />
            <h2 className="font-semibold text-xl ">CRM</h2>
          </div>
          <div className="relative">
            <input
              type="text"
              className="rounded-lg pl-5 border border-border-stroke md:w-[636px] sm:w-[300px]  h-12 outline-none text-slate-500 text-base font-normal  lg:placeholder:pl-5 transition-all duration-300 ease-in-out "
              placeholder="Search..."
            />
            <SvgSearchStatus className="absolute right-4 top-3 w-5 h-5 " />
          </div>
          <div className="flex justify-center items-center gap-4">
            <button>
              <SvgDark className="w-6 h-6 " />
            </button>
            <button>
              <SvgNotificationBing className="w-6 h-6 " />
            </button>

            <div className="flex items-center gap-2 ml-2">
              <img
                src={person}
                alt=""
                className="rounded-full object-cover w-12 h-12"
              />
              <div>
                <h4 className="font-medium text-base">Sammy kad</h4>
                <h5>sameerkad2001@gmail.com</h5>
              </div>
              <button>
                <SvgChevronDown />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
