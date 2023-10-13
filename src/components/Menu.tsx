import {IonContent,IonIcon,IonItem,IonLabel,IonList,IonListHeader,IonMenu,IonMenuToggle,} from '@ionic/react';
import { archiveOutline, archiveSharp, cartOutline,clipboardOutline, heartOutline, logInOutline, logOutOutline, peopleOutline, settingsOutline, sync,} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Dashboard',
    url: '/Dashboard',
    iosIcon: clipboardOutline,
    mdIcon: clipboardOutline
  },
  {
    title: 'Products',
    url: '/Products',
    iosIcon: cartOutline,
    mdIcon: cartOutline
  },
  {
    title: 'Category',
    url: '/Category',
    iosIcon: settingsOutline,
    mdIcon: settingsOutline
  },
  {
    title: 'Sales',
    url: '/Sales',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Purchases',
    url: '/Purchases',
    iosIcon: heartOutline,
    mdIcon: heartOutline
  },
  {
    title: 'Returns',
    url: '/Returns',
    iosIcon: sync,
    mdIcon: sync
  },
  {
    title: 'Peoples',
    url: '/Peoples',
    iosIcon: peopleOutline,
    mdIcon: peopleOutline
  },
  {
    title: 'SignOut',
    url: '/',
    iosIcon: logOutOutline,
    mdIcon: logOutOutline
  }
];


const Menu: React.FC = () => {

  return (
    <IonMenu contentId="main" type="overlay" >
      <IonContent>
        <IonList id="inbox-list">
         <IonListHeader className='menu-header mb-3 '>PosSystem</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem routerLink={appPage.url} >
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
