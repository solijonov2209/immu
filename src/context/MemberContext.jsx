import React, { createContext, useContext } from 'react';
import img1 from '../assets/images/mehriddin.png';
import img2 from '../assets/images/ravshan.png';
import img3 from '../assets/images/sherali.png';
const MembersContext = createContext();

const membersData = [
  {
    id: 1,
    name: 'Mehriddin Xayriddinov',
    position: 'Vasiylik kengashi raisi o‘rinbosari',
    phone: '+998(55) 502-22-99',
    email: 'sattarov@immu.uz',
    image: img1,
  },
  {
    id: 2,
    name: 'Ravshan Irmatov',
    position: 'Vasiylik kengashi raisi o‘rinbosari',
    phone: '+998(55) 502-22-99',
    email: 'sattarov@immu.uz',
    image: img2,
  },
  {
    id: 3,
    name: 'Sherali Jo‘raev',
    position: 'Vasiylik kengashi raisi',
    phone: '+998(55) 502-22-99',
    email: 'sattarov@immu.uz',
    image: img3,
  },
];

export const MembersProvider = ({ children }) => {
  return (
    <MembersContext.Provider value={{ members: membersData }}>{children}</MembersContext.Provider>
  );
};

export const useMembers = () => useContext(MembersContext);
