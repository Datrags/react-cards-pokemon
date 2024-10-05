import {useState} from 'react';
import {v1 as uuid} from "uuid";
import axios from 'axios';

const useAxios = (url) => {
    const [cards, setCards] = useState([]);
    const addCard = async (name) => {
    if (typeof(name) != "string") name="";
    try {
        const response = await axios.get(url + name);
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    } catch (e) {
        console.error(e);
    }
  };
  return [cards, addCard]
}

export default useAxios;