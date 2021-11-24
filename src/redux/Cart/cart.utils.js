
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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    //if there is a cart item and the quantity is more than 1
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
            //if it matches if it is the same one
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
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
