import { ALL_PRODUCTS_REQUEST, 
    ALL_PRODUCTS_SUCCESS, 
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS,
    ADMIN_PRODUCTS_SUCCESS,
    ADMIN_PRODUCTS_FAIL,
    ADMIN_PRODUCTS_REQUEST,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_RESET,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_RESET,

} from "../constants/productConstants";

// VER PRODUCTOS
export const productsReducer = (state ={ games: []}, action)=>{
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
        case ADMIN_PRODUCTS_REQUEST:    
            return{
                loading:true,
                games:[]
            }

        case ALL_PRODUCTS_SUCCESS:
            return{
                loading:false,
                games: action.payload.games,
                count: action.payload.count
            }

        case ADMIN_PRODUCTS_SUCCESS:
            return {
            loading:false,
            games:action.payload
            }   

        case ALL_PRODUCTS_FAIL:
        case ADMIN_PRODUCTS_FAIL:    
            return{
                loading:false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        

        default:
            return state;
    }
}

//REDUCER PARA TENER TODOS LOS DETALLES
export const gameDetailsReducer = (state = { game: {} }, action) => {
    switch (action.type) {

        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                game: action.payload
            }

        case PRODUCT_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const newProductReducer = (state={ game:{} }, action )=>{
    switch(action.type){

        case NEW_PRODUCT_REQUEST:
            return{
                ...state,
                loading: true
            }

        case NEW_PRODUCT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                game: action.payload.game
            }

        case NEW_PRODUCT_FAIL:
            return{
                ...state,
                error:action.payload
            }
            
        case NEW_PRODUCT_RESET:
            return{
                ...state,
                success:false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }

        default:
            return state
    }
}

//UPDATE AND DELETE
export const productReducer= (state = {}, action)=>{
    switch(action.type){
        case DELETE_PRODUCT_REQUEST:
        case UPDATE_PRODUCT_REQUEST:
            return{
                ...state, 
                loading:true
            }
        case DELETE_PRODUCT_SUCCESS:
            return{
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_PRODUCT_SUCCESS:
            return{
                ...state,
                loading: false,
                isUpdated: action.payload
            }
            
        case DELETE_PRODUCT_FAIL:
        case UPDATE_PRODUCT_FAIL:
            return{
                ...state,
                error: action.payload
            }
            
        case UPDATE_PRODUCT_RESET:
            return{
                ...state,
                isUpdated: false
            }
        case CLEAR_ERRORS:
            return {
                error:null
            }
        default:
            return state
    }
}

