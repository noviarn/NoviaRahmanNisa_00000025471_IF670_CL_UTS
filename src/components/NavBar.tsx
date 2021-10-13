import React from 'react';
import {
  IonHeader, IonToolbar, IonButtons, IonMenuButton, IonAvatar, IonImg, IonTitle, IonRouterLink, IonBackButton
} from '@ionic/react';

interface HeaderProps {
  title: string;
}

const NavBar: React.FC<HeaderProps> = ({ title }) => (
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        {title === 'Profil' ? (
          <IonBackButton defaultHref="/" />
        ) : (
          <IonMenuButton />
        )}
      </IonButtons>
      <IonRouterLink slot="end" routerLink="/profil">
        <IonAvatar>
          <IonImg src="/assets/images/pasfoto-3x4.jpg"/>
        </IonAvatar>
      </IonRouterLink>
      <IonTitle>{title}</IonTitle>
    </IonToolbar>
  </IonHeader>
);

export default NavBar;
