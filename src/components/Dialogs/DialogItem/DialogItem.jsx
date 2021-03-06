import React from "react";
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
                <img src={props.icon} alt=""/> <NavLink to={path}>{props.name} </NavLink>
        </div>
    )
}


export default DialogItem;


/*
className={ navData => navData.isActive ? s.active : s.item }*/
