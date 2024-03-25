import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     isCartOpen: false,
//     cart: [],
//     items: [],
// }

// export const cartSlice = createSlice({
//    name: 'cart',
//    initialState,
//    reducers: {
//     setItems: (state, action) => {
//         state.items = action.payload;
//     },

//     addToCart: (state,action) => {
//         const newItem = action.payload.item;
//         const existingItem = state.cart.find(item => item.id === newItem.id);
        
//         if (!existingItem) {
//             state.cart.push(newItem);
//         }
//     },

//     removeFromCart: (state, action) => {
//         state.cart = state.cart.filter((item) => item.id !== action.payload.id)
//     },
    
//     increaseCount: (state, action) => {
//         state.cart = state.cart.map((item) => {
//             if(item.id === action.payload.id) {
//                 item.count++
//             }
//             return item;
//         })
//     },

//     decreaseCount: (state, action) => {
//         state.cart = state.cart.map((item) => {
//             if(item.id === action.payload.id && item.count >1) {
//                 item.count--
//             }
//             return item;
//         })
//     },
//     setIsCartOpen: (state) => {
//         state.isCartOpen = !state.isCartOpen;
//     },
//    } 
// });

const initialState = {
    isCartOpen: false,
    cart: JSON.parse(localStorage.getItem('cart')) || [], // Load cart from local storage
    items: [],
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
    setItems: (state, action) => {
        state.items = action.payload;
    },

    addToCart: (state, action) => {
        const newItem = action.payload.item;
        const existingItemIndex = state.cart.findIndex(item => item.id === newItem.id);
        
        if (existingItemIndex === -1) {
            // Item does not exist in the cart, so add it
            state.cart.push(newItem);
        } else {
            // Item exists in the cart, update its count or any other property as needed
            state.cart[existingItemIndex].count += newItem.count;
        }

        // Save cart to local storage
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    removeFromCart: (state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);

        // Save cart to local storage
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    
    increaseCount: (state, action) => {
        state.cart = state.cart.map((item) => {
            if(item.id === action.payload.id) {
                item.count++
            }
            return item;
        });

        // Save cart to local storage
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    decreaseCount: (state, action) => {
        state.cart = state.cart.map((item) => {
            if(item.id === action.payload.id && item.count > 1) {
                item.count--
            }
            return item;
        });

        // Save cart to local storage
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    setIsCartOpen: (state) => {
        state.isCartOpen = !state.isCartOpen;
    },
   } 
});


export const {
setItems,
addToCart,
removeFromCart,
increaseCount,
decreaseCount,
setIsCartOpen
} = cartSlice.actions;

export default cartSlice.reducer;