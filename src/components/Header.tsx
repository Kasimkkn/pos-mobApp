import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonMenuButton, IonModal, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react'
import { chatbox, notifications } from 'ionicons/icons'
import React, { useState } from 'react'

const Header: React.FC = () => {

    const [showNotificationModal, setShowNotificationModal] = useState(false);

    const [showChatModal, setShowChatModal] = useState(false);
    const openNotificationModal = () => {
        setShowNotificationModal(true);
    };

    // Function to close the notification modal
    const closeNotificationModal = () => {
        setShowNotificationModal(false);
    };

    // Function to open the chat modal
    const openChatModal = () => {
        setShowChatModal(true);
    };

    // Function to close the chat modal
    const closeChatModal = () => {
        setShowChatModal(false);
    };
    return (
        <div className='d-flex justify-content-lg-start align-items-center'>
            <IonMenuButton color={'dark'}></IonMenuButton>
            <IonSearchbar className='w-75'></IonSearchbar>
            <IonIcon
                className="text-white mx-2 fs-3"
                icon={notifications}
                onClick={openNotificationModal}
            ></IonIcon>
            <IonIcon
                className="text-white mx-2 fs-3"
                icon={chatbox}
                onClick={openChatModal}
            ></IonIcon>
            <IonModal isOpen={showNotificationModal} onDidDismiss={closeNotificationModal}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Notifications</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <p>This is the content of your notification modal.</p>
                </IonContent>
                <IonFooter>
                    <IonToolbar>
                        <IonButton color={'dark'} slot='end' shape='round' onClick={closeNotificationModal}>Close</IonButton>
                    </IonToolbar>
                </IonFooter>
            </IonModal>

            <IonModal isOpen={showChatModal} onDidDismiss={closeChatModal}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Chat</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <p>This is the content of your chat modal.</p>
                </IonContent>
                <IonFooter>
                    <IonToolbar>
                        <IonButton color={'dark'} slot='end' shape='round' onClick={closeChatModal}>Close</IonButton>
                    </IonToolbar>
                </IonFooter>
            </IonModal>
        </div>
    )
}

export default Header
