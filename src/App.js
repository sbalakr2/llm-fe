import React, {useCallback, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Results from './components/Results';
import UserInput from './components/UserInput';
import { initStorage, sendInput, updateLocalStorage } from './services/service'

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

  return (
    <div className="App">
      <div className="container">
      <section className='result'>
        <Results output={output}/>
      </section>
      <section className='input'>
      <UserInput sendData={sendData} isSending={sending}/>
      </section>
      </div>
    </div>
  );
}

export default App;
