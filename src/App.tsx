import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu.js';
import Dashboard from './pages/Dashboard.js'
import Products from './pages/Products.js'
import Category from './pages/Category.js'
import Sales from './pages/Sales.js'
import Purchases from './pages/Purchases.js'
import Returns from './pages/Returns.js'
import Peoples from './pages/Peoples.js'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login.js';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id='main'>
            <Route exact path="/" component={Login} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Category" component={Category} />
            <Route exact path="/Sales" component={Sales} />
            <Route exact path="/Purchases" component={Purchases} />
            <Route exact path="/Returns" component={Returns} />
            <Route exact path="/Peoples" component={Peoples} />
            {/* <Redirect exact from="/" to="/Dashboard" /> */}
        </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
