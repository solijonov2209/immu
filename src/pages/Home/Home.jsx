import React from 'react';
import Hero from './_components/Hero';
import FoundGoals from './_components/FoundGoals';
import HomeNews from './_components/HomeNews/HomeNews';
import Members from './_components/Members';
import { MembersProvider } from '../../context/MemberContext';
import { Partners } from './_components/Partners';
import { OurMedia } from './_components/OurMedia';
import { Consultation } from './_components/Consultation';

const Home = () => {
  return (
    <>
      <Hero />
      <FoundGoals />
      <HomeNews />
      <MembersProvider>
        <Members />
      </MembersProvider>
      <Partners />
      <OurMedia />
      <Consultation />
    </>
  );
};

export default Home;
