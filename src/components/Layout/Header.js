import{Fragment} from 'react'
import mealImg from '../../assets/download.jpg'
import classes from './Header.module.css'
import HeaderButton from './HeaderButton'
const Header = (props) => {

    return (
        <Fragment>

            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderButton onClick={props.onShowCart}/>
            </header>
            
            <div className={classes['main-image']}>
                <img src={mealImg} alt='food' />
            </div>
        </Fragment>
    )
}
export default Header