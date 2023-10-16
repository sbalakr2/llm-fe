import React from "react";
import { getMessageHistory } from '../services/service'

const Results = ({output}) => {
    const messages = getMessageHistory();
    const filtered = messages.filter(msg => msg.role !== 'system');

    if(!messages) return null;

    return (
        <div className="result-section">{filtered.map((item) => {
            const actor = item.role === 'user' ? 'You: ' : 'Assistant: '
            return <div className={item.role} key={item.content}>
                <strong>{ actor }</strong>
                <span>{ item.content }</span>
                </div>
        })}</div>
    )
}

export default Results;