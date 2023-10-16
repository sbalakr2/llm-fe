import axios from 'axios';
import { API_URL, LOCAL_STORAGE_KEY } from './config';
    
const initStorage = () => {
    if(localStorage.getItem(LOCAL_STORAGE_KEY)) return;

    const messages = [{"role": "system", "content": "You are a helpful assistant."}];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
}

const updateLocalStorage = (content, role) => {
    const newMessage = {
        role,
        content
    }
    const messages = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    messages.push(newMessage);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
    console.log(`Reading local storage: ${localStorage.getItem(LOCAL_STORAGE_KEY)}`);
}

const getMessageHistory = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
}

const sendInput = async (input) => {
    try {
        // updateLocalStorage(input, "user");
         const messages = localStorage.getItem(LOCAL_STORAGE_KEY);

         // making api call
         const {data, status} = await axios.post(`${API_URL}/llm`, messages, {
            headers: {
                'Content-Type': 'application/json'
              }
         });

         if(status !== 200) {
            return "No results found!"
         }
         
         // set system messages in storage
         updateLocalStorage(data, "assistant");
         return data;
    } 
    catch(error) {
        console.log(error);
    };
}

const sendFileInput = async (files) => {
    try {
        const formData = new FormData();
        formData.append("files", files[0]);

         // making api call
         const {data, status} = await axios.post(`${API_URL}/llm/file`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
         });

         if(status !== 200) {
            return "No results found!"
         }

         return data;
    } 
    catch(error) {
        console.log(error);
    };
}

export {
    initStorage, 
    sendInput,
    sendFileInput,
    updateLocalStorage,
    getMessageHistory
};