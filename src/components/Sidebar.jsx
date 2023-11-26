import React from 'react';
import { PalaviProjects, SidebarData } from '../Data/Data';
import { UilSetting } from '@iconscout/react-unicons';

const Sidebar = () => {
  return (
    <div className="menu flex flex-col rounded-lg h-screen w-2/12 bg-white pt-3">
      {SidebarData.map((item, index) => {
        return (
          <div
            key={item.heading}
            className="menuItem flex mx my-5 items-center"
          >
            <item.icon className="mx-3 w-{25px} h-{25px}" />
            <span className="text-lg font-semibold"> {item.heading}</span>
          </div>
        );
      })}

      <hr className="w-3/4 mx-auto bg-black" />

      {/* palavi projects menu */}

      {PalaviProjects.map((item, index) => {
        return (
          <div
            key={item.heading}
            className="menuItem flex mx my-4 items-center"
          >
            <item.icon className="mx-3 w-{25px} h-{25px}" />
            <span className="text-lg font-semibold"> {item.heading}</span>
          </div>
        );
      })}
      {/* Setting */}
      <div>
        <li>{UilSetting} Setting </li>
      </div>
    </div>
  );
};

export default Sidebar;
