import { useContext } from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../context/cart-context'
import CartItem from './CartItem'

const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const totalAmount = (cartCtx.amount).toFixed(2)
    const hasItems = cartCtx.items.length >0
    const cartRemove = (id)=>{
        cartCtx.removeItem(id)
    }
    const cartAdd = (item)=>{
        cartCtx.addItem(item)
    }
    const cartItem = <ul className={classes['cart-item']}>
        {cartCtx.items.map(x => <li><CartItem key={x.id} name={x.name} amount={x.amount} price={x.price} onAdd={cartAdd.bind(null,x)} onRemove={cartRemove.bind(null,x.id)}/></li>)}
    </ul>
    return (
        <Modal onClose={props.onClose}>
            {cartItem}
            <div className={classes.total}>
            <span>Total:</span>
                <span>${totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}
export default Cart