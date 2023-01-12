import { useContext } from "react"
import CartContext from "../../context/cart-context"
import CartIcon from "../UI/CartIcon"
import classes from './HeaderButton.module.css'
const HeaderButton = props =>{
    const cartCtx = useContext(CartContext)
    const itemsNumber = cartCtx.items.reduce((a,c)=>{ 
        //console.log(c);
        return a += Number(c.amount)
    },0)
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.button}>{itemsNumber}</span>
        </button>
    )
}
export default HeaderButton