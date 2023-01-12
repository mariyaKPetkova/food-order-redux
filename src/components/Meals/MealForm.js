import { useRef } from 'react'
import classes from './MealForm.module.css'
const MealForm = (props) => {
    const amountInput = useRef()
    const submitHandler = e => {
        e.preventDefault()
        const enteredAmount = Number(amountInput.current.value)
        if (enteredAmount.length === 0 || enteredAmount < 1) {
            return;
        }
        console.log(enteredAmount);
        props.onAddToCart(enteredAmount)
    }
    return (
        <form className={classes.form} onClick={submitHandler}>
            <div className={classes.input}>
                <label>Amount</label>
                <input type='number' ref={amountInput} defaultValue='1' />
            </div>
            <button >Add</button>
        </form>
    )
}
export default MealForm