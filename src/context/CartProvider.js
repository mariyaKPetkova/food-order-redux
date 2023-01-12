import { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCart = {
    items: [],
    amount: 0
}
const CartReduser = (state, action) => {
    if (action.type === 'ADD') {
        //const updatedItems = state.items.concat(action.item)
        const existingItemIndex = state.items.findIndex(x => x.id === action.item.id)

        const existingItem = state.items[existingItemIndex]

        //console.log(existingItem);
        let changedItems

        if (existingItem) {
            //  console.log('in');
            const changedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }
            changedItems = [...state.items]
            changedItems[existingItemIndex] = changedItem
        } else {

            changedItems = state.items.concat(action.item)
        }

        const updatedAmount = state.amount + (action.item.price * action.item.amount)
        return {
            items: changedItems,
            amount: updatedAmount
        }
    }
    if (action.type === 'REMOVE') {
       // console.log(action.id)
        const existingItemIndex = state.items.findIndex(x => x.id === action.id)

        const existingItem = state.items[existingItemIndex]
        const updatedAmount = state.amount - existingItem.price
        let changedItems

        if (existingItem.amount === 1) {
            changedItems = state.items.filter(x => x.id !== action.id)
        } else {
            const changedItem = { ...existingItem, amount: existingItem.amount - 1 }
            changedItems = [...state.items]
            changedItems[existingItemIndex] = changedItem
        }
        return {
            items: changedItems,
            amount: updatedAmount
        }
    }
    return defaultCart
}
const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(CartReduser, defaultCart)
    const addHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item })

    }
    const removeHandler = (id) => {
        console.log(id);
        dispatchCartAction({ type: 'REMOVE', id: id })

    }
    const cartContext = {
        items: cartState.items,
        amount: cartState.amount,
        addItem: addHandler,
        removeItem: removeHandler,

    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider