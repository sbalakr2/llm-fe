import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { clearLocalStorage } from '../services/service';

const Toggle = ({ children, onFileMode }) => {
    const [fileMode, setFileMode] = useState(false);

    const onChange = (event) => {
        const value = event?.target?.checked || false;
        
        // delete conversation
        if(value) {
            clearLocalStorage();
        }
        setFileMode(value);
        onFileMode(value);
    }

    return (
        <div className="switch-section">
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="Enable file mode"
                    checked={fileMode}
                    onChange={onChange}
                />
            {fileMode && children}
        </div>
    );
}

export default Toggle;