import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const FileInput = ({setFile, isSending}) => {
    const onChange = (event) => {
        const files = event?.target?.files;

        if (!files.length) {
            return;
          }

        setFile(files);
    }

  return (
    <InputGroup>
        <Form.Control type="file" size="sm" onChange={onChange}/>
    </InputGroup>
  );
}

export default FileInput;