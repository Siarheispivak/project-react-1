import React from "react";
import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) =>{
    let path = "/dialogs/" + props.id;
    return(
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) =>{

    return(
        <div className={s.dialog}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Siarhei" id="1"/>
                <DialogItem name="Victor" id="2"/>
                <DialogItem name="Alex" id="3"/>
                <DialogItem name="Dasha" id="4"/>
                <DialogItem name="Katya" id="5"/>
                <DialogItem name="Lena" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How"/>
                <Message message="Yo"/>
                <Message message="Yo1"/>
                <Message message="Yo2"/>
                <Message message="Yo3"/>

            </div>
        </div>
    )

}

export default Dialogs;


/*
className={ navData => navData.isActive ? s.active : s.item }*/
