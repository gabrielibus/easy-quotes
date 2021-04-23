import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import StepCounter from './components/StepCounter';
import UploadPicture from './components/UploadPicture';
import Quote from './components/Quote';
import InputData from './components/InputData/InputData';
import Wellcome from './components/Welcome';
import "./styles/customStyles/customStyles.scss";
import "./styles/components/Quote.scss";
import "./styles/components/UploadPicture.scss";

function App() {

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
