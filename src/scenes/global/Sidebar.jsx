import React, { useState, useContext } from 'react';
import { ArrowDownward } from '@mui/icons-material/';
import { Box } from '@mui/material';





const Menus = [
  { title: 'Bussiness Development', src: 'Chart_fill',
  subMenus: [
    {
      title: 'Oppertunities/Tenders',
      src: 'Customers',
      
    },
    {
      title: 'Contacts',
      src: '/services/services3',
    },
  ],
  isOpen: false
}, 
  { title: 'Reservations', src: 'Chat',
  subMenus: [
    {
      title: 'Bookings',
    },
  ],
  isOpen: false },
  { title: 'Operations', src: 'User', gap: true, 
  subMenus: [
    {
      title: 'Checklist',
    },
    {
      title: 'Movement Logs',
    },
    {
      title: 'Maintenance',
    },
    {
      title: 'Driver Performance',

    },
    {
      title: 'Incidents',
    },
    {
      title: 'Violations',
    },
    {
      title: 'Expense',
    },
  ],
  isOpen: false
},
  {
    title: 'Infrastructure',
    src: 'Calendar',
     subMenus: [
      {
        title: 'Drivers',
      },
      {
        title: 'Vehicles',
      },
      { 
        title: 'Fuel Card',
      },
      {
        title: 'Inventory',
      },
      {
        title: 'Third Pary Assets',
      },
      {
        title: 'Vendors',
      },
      {
        title: 'Payroll',
      },
    ],
    isOpen: false
  },
];

const Sidebar = () => {
  const [Menu, SetMenu] = useState(Menus)
  const [open, setOpen] = useState(true);
  const setSubMenuOpen = (index) => {
    SetMenu((prevMenus) =>
      prevMenus.map((menu, i) => {
        if (i === index) {
          return { ...menu, isOpen: !menu.isOpen };
        }
        return menu;
      })
    );
  };
  return (
    <Box sx={{ position: 'relative', zIndex: '60' }}className=" flex items-end justify-end  ">
      
    
        
        <ul className=''>
          {Menu.map((Menu, index) => (
            <>
              <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-0' : 'mt-2'}  `}
              >
                {Menu.icon ? Menu.icon : ''}
                <span className="flex-1">{Menu.title}</span>
                {Menu.subMenus && (
                  <ArrowDownward
                    onClick={() => setSubMenuOpen(index)}
                    className={`${Menu.isOpen && 'rotate-180'}`}
                  />
                )}
              </li>
              {Menu.subMenus && Menu.isOpen && open && (
                <ul>
                  {Menu.subMenus.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer text-center text-sm text-gray-200 py-1 delay-200 animate-bounce ease-in-out duration-400"
                    >
                      {subMenuItem.icon}
                      {subMenuItem.title}
                      
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>

        
      </Box>
  );
};

export default Sidebar;