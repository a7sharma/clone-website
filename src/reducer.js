export const initialState = {
  basket:[
    {
      id:"333333",
      title:"Xiaomi Mi Smart Band 6",
      price:3499,
      rating:5,
      image:"https://m.media-amazon.com/images/I/41Nzx6heB5L._AC_UL320_.jpg"
    },
    {
      id:"333333",
      title:"Xiaomi Mi Smart Band 6",
      price:3499,
      rating:5,
      image:"https://m.media-amazon.com/images/I/41Nzx6heB5L._AC_UL320_.jpg"
    }
  ],
  user:null,
};

export const  getBasketTotal = (basket) => 
basket?.reduce((amount,item) =>  item.price + amount,0);

const reducer = (state,action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
          return{
            
            ...state,
            basket: [...state.basket , action.item]
          };
        
        
        case 'REMOVE_FROM_BASKET':
          let  newBasket = [...state.basket];

          const index = state.basket.findIndex((basketItem) => basketItem.Id === action.id);

          if (index != 0){
           newBasket.splice(index,1);
          } else{
            console.warn(
              ` Cant remove  product (id: ${action.id}) as its not in basket!`
            );
          }
       return{...state, 
        basket: newBasket,
      };
        default:
      return state;
    }
}

export default reducer;