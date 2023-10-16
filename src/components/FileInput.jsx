import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const FileInput = ({sendData, isSending}) => {
    const [value, setValue] = useState("");

    const onSend = () => {
        setValue("");
        sendData(value);
    }

    const onChange = (event) => {
        const files = event?.target?.files;

        if (!files.length) {
            return;
          }

        setValue(files);
    }

  return (
    <InputGroup>
        <Form.Control type="file" size="lg" onChange={onChange}/>
        <Button as="a" variant="success" className="send-button" onClick={onSend} disabled={isSending}>
        { isSending ? 'Processing' : 'Send' }
        </Button>
    </InputGroup>
  );
}

export default FileInput;