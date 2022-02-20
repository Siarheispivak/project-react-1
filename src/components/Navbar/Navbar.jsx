import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

import Sidebar from "./SideBar/Sidebar";




const Navbar = (props) => {

let wallElements = props.state.sideBar.wallContacts.map(w => <Sidebar name={w.name} icon={w.icon} id={w.id} />)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={ navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" className={ navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={ navData => navData.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={ navData => navData.isActive ? s.active : s.item }>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={ navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
            </div>
            <div className="contacts">
                <h1>Friends</h1>
                {wallElements}
            </div>
        </nav>
    )

}

export default Navbar;