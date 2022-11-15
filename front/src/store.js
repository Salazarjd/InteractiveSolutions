import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { productsReducer, gameDetailsReducer } from './reducer/productReducer';
import { cartReducer } from './reducer/cartReducer';

const reducer= combineReducers ({
    games:productsReducer,
    gameDetails:gameDetailsReducer,
    cart: cartReducer
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : []
    }
}

const middleware= [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;