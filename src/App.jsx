import React from 'react';
import { NavBar } from './Components/NavBar/NavBar';
import General from '../src/Components/General/Geniral';
import Tabs from './Components/Tabs/Tabs';
import Store from './Components/Store/Store';
import OVC from './Components/OverViewCounter/OVC';
import Footer from './Components/Footer/Footer';
import Popup from './Components/PopUp/Popup';

export const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div>
      <NavBar handleOrderPopup={handleOrderPopup} />      
      <General handleOrderPopup={handleOrderPopup} />
      <OVC />
      <Tabs handleOrderPopup={handleOrderPopup} />
      <Store />
      <Footer />      
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
}

export default App;
