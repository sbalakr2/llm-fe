import React, {useCallback, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Results from './components/Results';
import UserInput from './components/UserInput';
import FileInput from './components/FileInput';
import { initStorage, sendInput, sendFileInput, updateLocalStorage } from './services/service'

import './App.css';


const App = () => {
  const [output, setOutput] = useState(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    initStorage();
  }, []);

  const sendData = useCallback(async (input) => {
    if(!input) return;

    setSending(true);
    updateLocalStorage(input, "user");

    const response = await sendInput(input);
 
    setSending(false);
    setOutput(response);
  });

  const sendFile = async (files) => {
    if(!files) return;

    setSending(true);

    const response = await sendFileInput(files);
 
    setSending(false);
    setOutput(response);
  }

  return (
    <div className="App">
      <div className="container">
      <section className='result'>
        <Results output={output}/>
      </section>
      <section className='input'>
        <UserInput sendData={sendData} isSending={sending}/>
      </section>
      <section className='file-input'>
        <FileInput sendData={sendFile} isSending={sending}/>
      </section>
      </div>
    </div>
  );
}

export default App;
