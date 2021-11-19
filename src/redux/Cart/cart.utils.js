
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// export const addItemToCart = (cartItems, cartItemToAdd) => {
//     console.log(cartItems);
//     const existingCartItem = cartItems.find(
//         cartItem => cartItem.id === cartItemToAdd.id
//     );

//     if (existingCartItem) {
//         return cartItems.map(cartItem =>
//             cartItem.id === cartItemToAdd.id
//                 // add item if there is new cartitem
//                 ? { ...cartItem, quantity: cartItem.quantity + 1 }
//                 //new object made with quantity plus 1
//                 : cartItem
//             //if it doesnt match than return cartitem
//         );
//     }

//     return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
//     //existing cartItems  if there is no new cart item then make its quantity 1
// };
