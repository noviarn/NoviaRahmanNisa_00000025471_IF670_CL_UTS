import React from 'react';
import { IonActionSheet } from '@ionic/react';

interface ActionSheetProps {
  isActionSheet: boolean;
  resetActionSheet: () => void;
  funcHandler: () => void;
}

const ActionSheet: React.FC<ActionSheetProps> = ({
  isActionSheet,
  resetActionSheet,
  funcHandler,
}) => (
  <IonActionSheet
    isOpen={isActionSheet}
    onDidDismiss={resetActionSheet}
    header="Yakin gak gebet dia lagi?"
    buttons={[
      {
        text: 'Yakin, hapus dari daftar.',
        role: 'destructive',
        handler: funcHandler,
      },
      {
        text: 'Gak yakin, kembali.',
        role: 'cancel',
        handler: resetActionSheet,
      },
    ]}
  />
);

export default ActionSheet;
