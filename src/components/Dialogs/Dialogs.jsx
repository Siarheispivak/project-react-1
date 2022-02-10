import React from "react";
import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (/*props*/) => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to="/dialogs/siarhei" className={ navData => navData.isActive ? s.active : s.item }>Siarhei</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/viktor" className={ navData => navData.isActive ? s.active : s.item }>Victor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/Alex" className={ navData => navData.isActive ? s.active : s.item }>Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/dasha" className={ navData => navData.isActive ? s.active : s.item }>Dasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/katya" className={ navData => navData.isActive ? s.active : s.item }>Katya</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.dialog}>
                    Hi
                </div>
                <div className={s.dialog}>
                    How is your courses
                </div>
                <div className={s.dialog}>
                    Yo
                </div>
            </div>
        </div>
    )

}

export default Dialogs;