import { State } from "react-native-gesture-handler"

let defaultState = {
    selectedItems: { items: [], RestaurantName: "" },
  };
  
  let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        let newState = { ...state };
  
        if (action.payload.checkboxValue) {
          console.log("ADD TO CART");
  
          newState.selectedItems = {
            items: [...newState.selectedItems.items, action.payload],
            RestaurantName: action.payload.RestaurantName,
          };
        } else {
          console.log("REMOVE FROM CART");
          newState.selectedItems = {
            items: [
              ...newState.selectedItems.items.filter(
                (item) => item.name !== action.payload.name
              ),
            ],
            RestaurantName: action.payload.RestaurantName,
          };
        }
        console.log(newState, "👉");
        return newState;
      }
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
