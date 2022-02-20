import React from "react";
import s from './../Dialogs.module.css';




const Message = (props) => {

    return (
        <div className={s.dialog}>
            <img src={props.iconMessage} alt=""/> {props.message}
        </div>
    )
}

export default Message;


/*
className={ navData => navData.isActive ? s.active : s.item }*/
