import React from 'react';
import { useMembers } from '../../../context/MemberContext';
import MembersCard from '../../../components/Cards/MembersCards';
import './member.scss';

const Members = () => {
  const { members } = useMembers();
  return (
    <section className="members">
      <div className="container">
        <h2 className="members__title">A’zolar tarkibi</h2>
        <div className="members__wrapper">
          {members.map((member) => (
            <MembersCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
