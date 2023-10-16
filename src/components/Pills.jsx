import React from "react";
import pills from '../config/Pills';

import './Pills.css';

const Pills = () => {
    return (
        <section className="pill-container">
            {
                pills.map((pill) => {
                    return (
                        <div classname="pill-item">
                        <h6>{pill.name}</h6>
                        <p>{pill.description}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Pills;