import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { productsReducer, gameDetailsReducer, newProductReducer } from './reducer/productReducer';
import { cartReducer } from './reducer/cartReducer';
import { authReducer, forgotPasswordReducer, userReducer } from './reducer/userReducer';

const reducer= combineReducers ({
    games:productsReducer,
    gameDetails:gameDetailsReducer,
    cart: cartReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    newgame: newProductReducer,
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