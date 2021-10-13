import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRouterLink, IonIcon, IonGrid, IonRow, IonCol, IonAvatar
} from '@ionic/react';
import NavBar from '../components/NavBar';

const Profile: React.FC = () => {
  return (
    <>

       <NavBar title="GebetApp" />
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader className="ion-text-center">
                  <IonCardTitle>
                    Novia Rahman Nisa
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader className="ion-text-center">
                  <IonCardTitle>
                    00000025471
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
    </>
  );
};

export default Profile;