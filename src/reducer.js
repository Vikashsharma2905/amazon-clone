export const initialState = {
    basket : [],
    user:null,
}

export const getBasketTotal = (basket) => 
basket?.reduce((amount,item)=> item.price + amount ,0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //Logic to add item to basket
            return {
                ...state,
                basket: [...state.basket,action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id)
            if(index>=0){
                newBasket.splice(index, 1);
            }
            else{
               console.warn('not found') 
            }
            return {...state, basket : newBasket};
            break;

        case 'SET_USER':
            return{
                ...state,
                user:action.user,
            }
            break;
        default:
            return state;
    }
}

export default reducer;