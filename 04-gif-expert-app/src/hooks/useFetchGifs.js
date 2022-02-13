import { useEffect, useState } from 'react';
import { getGifs } from '../helpers.js/getGifs';

export const useFetchGifs = category => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category).then(img => {
            setState({
                data: img,
                loading: false
            });
        });
    }, [category]);

    return state;
};
