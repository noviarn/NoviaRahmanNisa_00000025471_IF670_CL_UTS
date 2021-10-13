import React from 'react';
import { Gebetan } from './Gebetan';

interface Context {
  daftarGebetans: Gebetan[];
  targetGebetans: Gebetan[];
  addTargetGebetan: (
    gebetanId: string,
    gebetanName: string,
    gebetanGender: 'm' | 'f',
    gebetanBio: string,
    gebetanPhoto: string
  ) => void;
  deleteTargetGebetan: (gebetanId: string) => void;
}

const GebetansContext = React.createContext<Context>({
  daftarGebetans: [],
  targetGebetans: [],
  addTargetGebetan: () => {},
  deleteTargetGebetan: () => {},
});

export default GebetansContext;
