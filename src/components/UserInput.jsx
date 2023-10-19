
import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import debounce from 'lodash.debounce';

import './UserInput.css';

const UserInput = ({sendData, isSending}) => {
    const [value, setValue] = useState("");

    const onSend = () => {
      setValue("");
      sendData(value);
    }

    const onInputChange = debounce((event) => {
      event.preventDefault();
      const val = event?.target?.value;
      setValue(val);
    }, 300);

    return (
      <Form id="send-form">
        <InputGroup>
          <Form.Control 
            as="textarea" 
            aria-label="With textarea" 
            rows="1" 
            onChange={onInputChange} />
          <Button as="a" variant="light" className="send-button" onClick={onSend} disabled={isSending}>
          { isSending ? 'Processing' : 'Send' }
          </Button>
          </InputGroup>
        </Form>
    )
}

export default UserInput;