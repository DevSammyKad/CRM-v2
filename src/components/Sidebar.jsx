import React from 'react';

import { PalaviProjects, SidebarData } from '../Data/Data';
import { UilSetting } from '@iconscout/react-unicons';

const Sidebar = () => {
  return (
    <div className="menu flex flex-col  h-screen w-2/12 bg-white pt-3 border-r border-border-stroke">
      {SidebarData.map((item, index) => {
        return (
          <div
            key={item.heading}
            className="flex mx  items-center cursor-pointer text-gray p-4 ease-in-out hover:text-purple hover:bg-bg-menu "
          >
            <item.icon className="mx-3 w-{25px} h-{25px}" />
            <span className="text-lg font-semibold"> {item.heading}</span>
          </div>
        );
      })}

      <hr className="w-3/4 mx-auto border-border-stroke my-3" />

      {/* palavi projects menu */}

      {PalaviProjects.map((item, index) => {
        return (
          <div
            key={item.heading}
            className="flex mx  items-center cursor-pointer text-gray p-4 ease-in-out hover:text-purple hover:bg-bg-menu"
          >
            <item.icon className="mx-3 w-{25px} h-{25px}" />
            <span className="text-lg font-semibold"> {item.heading}</span>
          </div>
        );
      })}
      {/* Setting */}
    </div>
  );
};

export default Sidebar;
