import './App.css';
import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import Wellcome from './components/Welcome';
import InputData from './components/InputData';
import StepCounter from './components/StepCounter';
import UploadPicture from './components/UploadPicture';
import Quote from './components/Quote';


function App() {

  // const {test} = useContext(GlobalContext);

  return (
    <div className="App">
      <GlobalProvider>
        <Wellcome />
        <InputData />
        <UploadPicture />
        <Quote />
        <StepCounter />
      </GlobalProvider>
    </div>
  );
}

export default App;
