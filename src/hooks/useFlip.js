import {useState} from 'react';

const useFlip = (state=true) => {
    const [cardState, setCardState] = useState(state);

    const flipCard = () => {
        setCardState(isUp => !isUp);
    };

    return [cardState, flipCard];
}

export default useFlip;