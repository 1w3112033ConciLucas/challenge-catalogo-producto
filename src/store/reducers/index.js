import { GET_PRODUCTS } from "../actions";

const initialState = {
    products: [],
    loading: true,
}

const rootReducer = (state = initialState, action) => {
    
    //console.log("Info en reducer: ", action);

    switch(action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        default:
            return {
                ...state,
            };     
    }   
}

export default rootReducer;