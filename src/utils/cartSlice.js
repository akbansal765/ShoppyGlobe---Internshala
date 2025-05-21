import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItem : (state, action) => {
            //add quantity property to new cart item object
            
            //if cart item already exists in the items/cart then take the existing quantity and add 1 more
            const alreadyExistingItem = state.items.find(obj => obj.id == action.payload.id);
              if(alreadyExistingItem){
                 alreadyExistingItem.quantity = alreadyExistingItem.quantity + 1;
              }else{
                 // add the quantity 1 if item does not already exists in the cart/items state
                 action.payload.quantity = 1;
                 state.items.push(action.payload);
              }          
        },
        calculateTotalQuantity: (state) => {
            // this function should be called everytime when item is added to cart
            
                //calculating total quantity using quanity property in each object
                const totalCartItems = state?.items?.reduce((acc, cur) => {
                acc = acc + cur.quantity;
                return acc;
                }, 0)

                state.totalQuantity = totalCartItems;
        },
        increaseQuantity: (state, action) => {
            //increase the quantity of the cartitem in items state
            const itemToBeIncrease = state.items.find(item => item.id == action.payload.id);
            itemToBeIncrease.quantity = itemToBeIncrease.quantity + 1;

            //increase the quanity of the cartitem in totalQuantity state
            state.totalQuantity++;

        },
        decreaseQuantity: (state, action) => {
            //decrease the quantity of the cartitem in items state
            const itemToBeDecrease = state.items.find(item => item.id == action.payload.id);
            itemToBeDecrease.quantity = itemToBeDecrease.quantity - 1;

            //decrease the quanity of the cartitem in totalQuantity state
            state.totalQuantity--;
        },
        removeItem: (state, action) => {
            //find the index of the item to be removed
            const itemToBeRemoved = state.items.findIndex(item => item.id == action.payload.id);
            //remove the item from the state
            state.items.splice(itemToBeRemoved, 1);

            //call the calculateTotalQuantity reducer func again when pressing the remove button
        }
    }
});

export const {addItem, calculateTotalQuantity, increaseQuantity, decreaseQuantity, removeItem} = cartSlice.actions;
export default cartSlice.reducer;