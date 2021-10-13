import React, { useContext, useRef, useState } from 'react';
import { IonList, IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonItem, IonThumbnail, IonImg, IonLabel
} from '@ionic/react';
import { heart, male, female } from 'ionicons/icons';
import { Gebetan } from '../components/Gebetan';
import GebetansContext from '../components/GebetanContext';
import NavBar from '../components/NavBar';

const Home: React.FC = () => {
  const [selectedGebetan, setSelectedGebetan] = useState<Gebetan>();
  const gebetansContext = useContext(GebetansContext);
  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  const startAddTargetGebetanHandler = (gebetanId: string) => {
    if (selectedGebetan) {
      const target = gebetansContext.targetGebetans.find(
        (gebetan) => gebetan.id === selectedGebetan.id
      );

      if (!target) {
        gebetansContext.addTargetGebetan(
          selectedGebetan.id,
          selectedGebetan.name,
          selectedGebetan.gender,
          selectedGebetan.bio,
          selectedGebetan.photo
        );
      }
    }
    slidingOptionsRef.current?.closeOpened();

    const gebetan = gebetansContext.daftarGebetans.find(
      (gebetan) => gebetan.id === gebetanId
    );
    setSelectedGebetan(gebetan);
  };

  return (
    <>

      <NavBar title="GebetApp" />
      <IonList inset>
        {gebetansContext.daftarGebetans.map((gebetan) => (
          <IonItemSliding
            ref={slidingOptionsRef}
            key={gebetan.id}
          >
            <IonItemOptions side="end">
              <IonItemOption
                onClick={startAddTargetGebetanHandler.bind(null, gebetan.id)}
              >
                <IonIcon icon={heart} slot="icon-only" />
              </IonItemOption>
            </IonItemOptions>
            <IonItem>
              <IonThumbnail slot="start">
                <IonImg src={gebetan.photo}/>
              </IonThumbnail>
              <IonLabel>
                <h2>{gebetan.name}</h2>
                <p>{gebetan.bio}</p>
                {gebetan.gender === 'm' ? (
                  <p>
                    <IonIcon
                      icon={male}
                    />{' '}
                    Laki-laki
                  </p>
                ) : (
                  <p>
                    <IonIcon
                      icon={female}
                    />{' '}
                    Perempuan
                  </p>
                )}
              </IonLabel>
            </IonItem>
          </IonItemSliding>
        ))}
      </IonList>
    </>
  );
};

export default Home;
