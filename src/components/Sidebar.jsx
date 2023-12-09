import React from 'react';
import { Link } from 'react-router-dom';

import { PalaviProjects, SidebarData, SidebarFooter } from '../Data/Data';

const Sidebar = () => {
  return (
    <div className="menu flex flex-col justify-evenly h-full w-72 pl-1 bg-white pt-2 border-r border-border-stroke">
      <p className="pl-5 text-gray-light leading-2	text-sm font-semibold p-1">
        Main
      </p>

      {SidebarData.map((item, index) => {
        return (
          <Link to={item.path} key={index}>
            <div className="flex mx items-center cursor-pointer text-gray leading-4 text-base font-normal p-4  ease-in-out hover:text-text-purple hover:bg-bg-menu">
              <item.icon className="mx-3 w-25 h-25" />
              <span className="text-sm font-semibold">{item.heading}</span>
            </div>
          </Link>
        );
      })}

      <hr className="w-3/4 mx-auto border-border-stroke my-2" />

      {/* palavi projects menu */}
      <p className="ml-5 text-gray-light leading-3	text-sm font-semibold p-1">
        Palavi Projects
      </p>

      {PalaviProjects.map((item, index) => {
        return (
          <div
            key={index}
            className="flex mx  items-center cursor-pointer text-gray leading-4	text-base font-normal p-4 ease-in-out hover:text-text-purple hover:bg-bg-menu"
          >
            <item.icon className="mx-3 w-{25px} h-{25px}" />
            <span className="text-sm font-semibold"> {item.heading}</span>
          </div>
        );
      })}
      <hr className="w-3/4 mx-auto border-border-stroke my-1" />
      {/* Setting */}
      {SidebarFooter.map((item, index) => {
        return (
          <Link to={item.path} key={index}>
            <div className="flex mx  items-center cursor-pointer text-gray leading-4	text-sm font-normal p-4 ease-in-out hover:text-text-purple hover:bg-bg-menu">
              <item.icon className="mx-3 w-{25px} h-{25px}" />
              <span className="text-sm font-semibold"> {item.heading}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
