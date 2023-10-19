import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Pills from '../config/Pills';

const ZeroState = () => {
    return (
        <>
        {
            Pills.map((pill) => {
                return (
                    <Card style={{ width: '18rem', padding: '10px' }}>
                        <Card.Body>
                            <Card.Title>{pill.title}</Card.Title>
                            <Card.Text>
                                {pill.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })
        }
        </>
      );
}

export default ZeroState;