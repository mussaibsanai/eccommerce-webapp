import { ADD_TO_CART, REMOVE_ITEM } from "../Action/actionTypes"


const initState = {
    items: [
        {
            id: 1,
            title: "TURTLENECK TOP",
            description: "Fitted turtleneck top in super fine cable knit",
            availableSizes: ["XS", "S", "M", "L"],
            price: 59.99,
            isActive: true,
            imageURL: "",
          },
          {
            id: 2,
            title: "CROPPED TROUSERS",
            description: "Cropped women's trousers in houundstooth wool tailoring",
            availableSizes: ["XS", "S", "M", "L"],
            price: 59.99,
            isActive: true,
            imageURL: "https://shorturl.at/bcCR6",
          },
          {
            id: 3,
            title: "PRINTED SHIRT DRESS",
            description: "Creps shirt dress with rita ackermann's print",
            availableSizes: ["XS", "S", "M", "L"],
            price: 59.99,
            isActive: true,
            imageURL: "https://shorturl.at/bfxDP",
          },
          {
            id: 4,
            title: "TURTLENECK TOP",
            description: "Fitted turtleneck top in super fine cable knit",
            availableSizes: ["XS", "S", "M", "L"],
            price: 59.99,
            isActive: true,
            imageURL: "",
          },
          {
            id: 5,
            title: "CROPPED TROUSERS",
            description: "Cropped women's trousers in houundstooth wool tailoring",
            availableSizes: ["XS", "S", "M", "L"],
            price: 59.99,
            isActive: false,
            imageURL: "https://shorturl.at/bcCR6",
          },
          {
            id: 6,
            title: "PRINTED SHIRT DRESS",
            description: "Creps shirt dress with rita ackermann's print",
            availableSizes: ["XS", "S", "M", "L"],
            price: 59.99,
            isActive: true,
            imageURL: "https://shorturl.at/bfxDP",
          },
          {
            id: 7,
            title: "TURTLENECK TOP",
            description: "Fitted turtleneck top in super fine cable knit",
            availableSizes: ["XS", "S", "M", "L"],
            price: 59.99,
            isActive: true,
            imageURL: "",
          },
          {
            id: 8,
            title: "CROPPED TROUSERS",
            description: "Cropped women's trousers in houundstooth wool tailoring",
            availableSizes: ["XS", "S", "M", "L"],
            price: 59.99,
            isActive: true,
            imageURL: "https://shorturl.at/bcCR6",
          },
          {
            id: 9,
            title: "PRINTED SHIRT DRESS",
            description: "Creps shirt dress with rita ackermann's print",
            availableSizes: ["XS", "S", "M", "L"],
            price: 59.99,
            isActive: true,
            imageURL: "https://shorturl.at/bfxDP",
          },
          {
            id: 10,
            title: "PRINTED SHIRT DRESS",
            description: "Creps shirt dress with rita ackermann's print",
            availableSizes: ["XS", "S", "M", "L"],
            price: 59.99,
            isActive: false,
            imageURL: "https://shorturl.at/bfxDP",
          },
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{

    switch (action.type) {
        case ADD_TO_CART:
            let existed_item= state.addedItems.find(item=> action.data.id === item.id && action.data.SelectedSize == item.SelectedSize);
            if(existed_item == undefined){
                return {
                    ...state,
                    addedItems: [...state.addedItems, action.data],
                  };
            }else{

            }
        
        
        default:
          return state;
      }
    
    

}
export default cartReducer;