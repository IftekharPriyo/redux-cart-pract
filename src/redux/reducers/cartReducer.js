import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [{name: 'Lenovo Laptop', id: 1},
    {name: 'Asus Laptop', id: 2},
    {name: 'Apple Laptop', id: 3},
    {name: 'Dell Laptop', id: 4},
    {name: 'HP Laptop', id: 5},
    {name: 'Toshiba Laptop', id: 6}]
}

export const cartReducers = (state = initialState, action) =>{
    switch (action.type) {
        
        case ADD_TO_CART:
            // console.log(action);
            // const newId = action.id;
            const newItem = {productId: action.id, name: action.name, cartId: state.cart.length+1}
            const newCartAdd = [...state.cart, newItem];
            return { 
                ...state, cart: newCartAdd
            }

        case REMOVE_FROM_CART:
            const id = action.id;
            const newCart = state.cart.filter(item=> item.cartId !== id)
            return {...state, cart : newCart}   

        default:
            return state;
    }
}