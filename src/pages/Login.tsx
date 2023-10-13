import React, { useEffect, useState } from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonLoading,
  useIonRouter,
} from '@ionic/react';
import { logInOutline, logoFacebook, logoGoogle, logoTwitter, personCircleOutline } from 'ionicons/icons';
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';

const INTRO_KEY = 'intro-seen';

const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(true);
  const [present, dismiss] = useIonLoading();

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      setIntroSeen(seen.value === 'true');
    };
    checkStorage();
  }, []);

  const doLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    await present('Logging in...');
    setTimeout(async () => {
      dismiss();
      router.push('/Dashboard', 'root');
    }, 2000);
  };

  const finishIntro = async () => {
    setIntroSeen(true);
    Preferences.set({ key: INTRO_KEY, value: 'true' });
  };


  return (
    <IonPage>
            <IonCol className='d-flex flex-column justify-content-around bg-gradient bg-opacity-50  '>
              <IonCard className='bg-transparent '>
                <IonCardContent>
                  {!introSeen ? (
                    <Intro onFinish={finishIntro} />
                  ) : (
                    <form onSubmit={doLogin}>
                      <IonInput mode="md" fill="outline" labelPlacement="floating" label="Email" type="email" placeholder="Admin"></IonInput>
                      <IonInput mode="md" className="ion-margin-top" fill="outline" labelPlacement="floating" label="Password" type="password" placeholder="Admin"></IonInput>
                      <IonButton type="submit" color={'dark'} expand="block" className="ion-margin-top">
                        Login
                        <IonIcon icon={logInOutline} slot="end" />
                      </IonButton>
                    </form>
                  )}
                </IonCardContent>
              </IonCard>
                    <IonCard className='d-flex justify-content-center bg-transparent '>
                        <IonCardContent>
                            <IonButton color={'dark'}>
                                <IonIcon icon={logoGoogle} ></IonIcon>
                            </IonButton>
                            <IonButton color={'dark'}>
                                <IonIcon icon={logoFacebook}></IonIcon>
                            </IonButton>
                            <IonButton color={'dark'}>
                                <IonIcon icon={logoTwitter}></IonIcon>
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
            </IonCol>
    </IonPage>
  );
};

export default Login;
