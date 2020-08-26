import React, { useState } from 'react';
import Main from './Main';
import Alert from './Alert';


function App() {

  const [showAlert, setShowAlert] = useState(false);

  const toggleShowAlert = () => {
    setShowAlert(prev => !prev);
    setTimeout(() => {
      setShowAlert(prev => !prev);
    }, 3000)
  }

  
  return (
    <div className='container pt-3'>
      {showAlert && 
        <Alert />
        }      
      <Main showAlert={toggleShowAlert}/>
    </div>
  );
}

export default App;
