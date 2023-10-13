import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Intro.css';
import { image } from 'ionicons/icons';

interface ContainerProps {
  onFinish: () => void;
}

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
  return (
    <Swiper>

      <SwiperSlide>
        <img src={image} alt="Intro 3" />
        <IonText>
          <h3>Hello,Admin</h3>
        </IonText>
        <IonButton onClick={() => onFinish()}>Finish</IonButton>
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;
