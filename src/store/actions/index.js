import axios from 'axios';
import { BACK_URL } from '../../constants';

export const GET_PRODUCTS = "GET_PRODUCTS";

export function getProducts() {
    return async function(dispatch){
        return await axios.get(`${BACK_URL}`)
        .then((response) => {
            dispatch({
                type: GET_PRODUCTS,
                payload: response.data,
            })
        });
    }
}


