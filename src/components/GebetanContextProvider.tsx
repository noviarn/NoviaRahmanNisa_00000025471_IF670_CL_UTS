import React, { useState } from 'react';
import { Gebetan } from './Gebetan';
import GebetansContext from './GebetanContext';

const GebetansContextProvider: React.FC = ({ children }) => {
  const daftarGebetans: Gebetan[] = [
    {
      id: '1',
      name: 'Shinta Kusuma Dewi',
      gender: 'f',
      bio: 'Aku suka cowo macho',
      photo: '/assets/images/foto-1.jpg'
    },
    {
      id: '2',
      name: 'Tony Hehe',
      gender: 'm',
      bio: 'Aku cowo humoris',
      photo: '/assets/images/foto-2.jpg'
    },
    {
      id: '3',
      name: 'Bella Humorisa',
      gender: 'f',
      bio: 'Aku suka ketawa',
      photo: '/assets/images/foto-3.jpg'
    },
    {
      id: '4',
      name: 'Joko Pintar',
      gender: 'm',
      bio: 'Aku cowo jenius',
      photo: '/assets/images/foto-4.jpg'
    },
    {
      id: '5',
      name: 'John Thor',
      gender: 'm',
      bio: 'Aku tinggal di Asgard',
      photo: '/assets/images/foto-5.jpg'
    },
  ];

  const [targetGebetans, setTargetGebetans] = useState<Gebetan[]>([]);

  const addTargetGebetan = (
    id: string,
    name: string,
    gender: 'm' | 'f',
    bio: string,
    photo: string
  ) => {
    const newTargetGebetan: Gebetan = {
      id: id,
      name: name,
      gender: gender,
      bio: bio,
      photo: photo
    };

    const updatedTargetGebetans = [...targetGebetans, newTargetGebetan];

    setTargetGebetans(updatedTargetGebetans);
  };

  const deleteTargetGebetan = (id: string) => {
    const updatedTargetGebetans = targetGebetans.filter(
      (gebetan) => gebetan.id !== id
    );

    setTargetGebetans(updatedTargetGebetans);
  };

  return (
    <GebetansContext.Provider
      value={{
        daftarGebetans,
        targetGebetans,
        addTargetGebetan,
        deleteTargetGebetan,
      }}
    >
      {children}
    </GebetansContext.Provider>
  );
};

export default GebetansContextProvider;
