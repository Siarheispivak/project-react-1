import React from 'react';
import s from './Sidebar.module.css';






const SideBar = (props) => {
    return (
                <div className={s.wallFriends}>
                <div className={s.wallFriendsPics}>
                    <img src={props.icon} alt=""/>
                    {props.name}
                </div>
                </div>
    )

}

export default SideBar;