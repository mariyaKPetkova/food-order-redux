import { useContext } from 'react'
import classes from './MealItem.module.css'
import MealForm from './MealForm'
import CartContext from '../../context/cart-context'
const MealItem = (props) => {
    const cartCtx = useContext(CartContext)
    const addHandler = (amount)=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount,
            price:props.price

        })
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>$ {props.price}</div>
            </div>
            <div><MealForm onAddToCart = {addHandler}/></div>
        </li>
    )
}
export default MealItem