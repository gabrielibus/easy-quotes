import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import StepCounter from './components/StepCounter/StepCounter';
import UploadPicture from './components/UploadPicture/UploadPicture';
import Quote from './components/borrame_Quote.jsx/Quote';
import InputData from './components/InputData/InputData';
import Wellcome from './components/Welcome/Welcome';
import "./styles/customStyles/customStyles.scss";
import "./styles/components/Quote.scss";
import "./styles/components/UploadPicture.scss";
import Summary from './components/Summary/Summary';

function App() {

  return (
    <div className="App">
      <GlobalProvider>
        <Wellcome />
        <InputData />
        <UploadPicture />
        <Summary />
        <StepCounter />
      </GlobalProvider>
    </div>
  );
}

export default App;
