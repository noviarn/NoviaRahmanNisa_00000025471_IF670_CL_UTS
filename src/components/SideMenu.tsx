import React from 'react';
import {
  IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonItem, IonLabel, IonIcon
} from '@ionic/react';

const SideMenu: React.FC = () => (
  <IonMenu contentId="main">
    <IonHeader>
      <IonToolbar>
        <IonTitle>GebetApp</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonMenuToggle>
          <IonItem button routerLink="/home">
            <IonLabel>Daftar Calon Gebetan</IonLabel>
          </IonItem>
          <IonItem button routerLink="/target-gebetan">
            <IonLabel>Target Gebetan</IonLabel>
          </IonItem>
          <IonItem button routerLink="/profil">
            <IonLabel>Profil</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default SideMenu;
