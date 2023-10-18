import React, {useCallback, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Results from './components/Results';
import UserInput from './components/UserInput';
import FileInput from './components/FileInput';
import Toggle from './components/Toggle';
import { initStorage, sendInput, sendFileInput, updateLocalStorage } from './services/service';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import './App.css';


const App = () => {
  const [sending, setSending] = useState(false);
  const [fileMode, setFileMode] = useState(false);
  const [file, setFile] = useState([]);

  useEffect(() => {
    initStorage();
  }, []);

  const sendData = useCallback(async (input) => {
    if(!input) return;

    setSending(true);
    updateLocalStorage(input, "user");

    fileMode ? await sendFileInput(file, input) :  await sendInput(fileMode);
    setSending(false);
  });

  const sendFile = async (files) => {
    if(!files) return;
    
    setSending(true);
    await sendFileInput(files);
    setSending(false);
  }

  const onFileMode = (value) => {
    // value will be true for file mode
    setFileMode(value);
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={{ span: 7, offset: 1}}>
          <section className='result'>
            <Results isSending={sending}/>
          </section>
          <section className='input'>
            <UserInput sendData={sendData} isSending={sending}/>
          </section>
        </Col>
        <Col xs={3}>
          <Toggle onFileMode={onFileMode}>
              <section className='file-input'>
                <FileInput setFile={setFile} isSending={sending}/>
              </section>
            </Toggle>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
