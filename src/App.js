import './App.css';
import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import Wellcome from './components/Wellcome';
import InputData from './components/InputData';
import StepCounter from './components/StepCounter';
import UploadPicture from './components/UploadPicture';


function App() {

// const {test} = useContext(GlobalContext);

  return (
    <GlobalProvider>
    <div className="App">
      <Wellcome />
      <InputData />
      <UploadPicture />
    </div>
    <StepCounter />
    </GlobalProvider>
  );
}

export default App;
            