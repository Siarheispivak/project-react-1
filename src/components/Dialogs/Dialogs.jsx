import React from "react";
import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {

    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
const Dialogs = (props) => {


    let dialogs = [
        {id: 1, name: 'Siarhei'},
        {id: 2, name: 'Viktor'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Dasha'},
        {id: 5, name: 'Katya'},
        {id: 6, name: 'Lena'}
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Y01'},
        {id: 5, message: 'Yo2'},
        {id: 6, message: 'Yo2'}
    ]
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let massegesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {massegesElements}
            </div>
        </div>
    )

}

export default Dialogs;


/*
className={ navData => navData.isActive ? s.active : s.item }*/
