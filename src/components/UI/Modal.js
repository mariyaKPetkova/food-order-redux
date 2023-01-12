import classes from './Modal.module.css'
import { Fragment } from 'react'
const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}/>
    )
}
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}
const Modal = (props) => {
    return (
        <Fragment>
            <Backdrop onClose={props.onClose}/>
            <ModalOverlay>{props.children}</ModalOverlay>
        </Fragment>
    )
}
export default Modal