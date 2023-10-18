import React from "react";
import { getMessageHistory } from '../services/service';
import Loader from './Loader';

const Results = ({ isSending }) => {
    const messages = getMessageHistory();
    if(!messages) return null;

    const filtered = messages.filter(msg => msg.role !== 'system');

    return (
        <div className="result-section">
            {filtered.map((item) => {
            const actor = item.role === 'user' ? 'You: ' : 'Assistant: '
            return <div className={item.role} key={item.content}>
                <strong>{ actor }</strong>
                <span>{ item.content }</span>
                </div>
        })}
        </div>
    )
}

export default Results;