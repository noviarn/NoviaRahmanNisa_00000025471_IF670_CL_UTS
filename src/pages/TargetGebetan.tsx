import React, { useContext, useRef, useState } from 'react';
import { IonList, IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonItem, IonThumbnail, IonImg, IonLabel, IonGrid, IonRow, IonCol, IonButton,
} from '@ionic/react';
import { close, male, female } from 'ionicons/icons';
import { Gebetan } from '../components/Gebetan';
import GebetansContext from '../components/GebetanContext';
import ActionSheet from '../components/ActionSheet';
import NavBar from '../components/NavBar';

const TargetGebetan: React.FC = () => {
  const [selectedGebetan, setSelectedGebetan] = useState<Gebetan>();
  const [showActionSheet, setShowActionSheet] = useState(false);
  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const gebetansContext = useContext(GebetansContext);

  const deleteTargetGebetanHandler = () => {
    if (selectedGebetan) {
      gebetansContext.deleteTargetGebetan(selectedGebetan.id);
    }
    setShowActionSheet(false);
  };

  const startDeleteTargetGebetanHandler = (gebetanId: string) => {
    slidingOptionsRef.current?.closeOpened();

    const gebetan = gebetansContext.targetGebetans.find(
      (gebetan) => gebetan.id === gebetanId
    );
    setSelectedGebetan(gebetan);
    setShowActionSheet(true);
  };

  const resetActionSheet = () => {
    setShowActionSheet(false);
  };

  return (
    <>

      <NavBar title="GebetApp" />
      <ActionSheet
        isActionSheet={showActionSheet}
        resetActionSheet={resetActionSheet}
        funcHandler={deleteTargetGebetanHandler}
      />

      {gebetansContext.targetGebetans.length ? (
        <IonList inset>
          {gebetansContext.targetGebetans.map((gebetan) => (
            <IonItemSliding
              ref={slidingOptionsRef}
              key={gebetan.id}
            >
              <IonItemOptions side="end">
                <IonItemOption
                  onClick={startDeleteTargetGebetanHandler.bind(
                    null,
                    gebetan.id
                  )}
                >
                  <IonIcon icon={close} slot="icon-only" />
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
      ) : (
        <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <p>Anda belum punya target gebetan.</p>
              <IonButton fill="solid" routerLink="/home">
                Cari Gebetan
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      )}
    </>
  );
};

export default TargetGebetan;