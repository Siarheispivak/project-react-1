import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {




    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} icon={d.icon}/>);
    let massagesElements = props.state.messages.map(m => <Message message={m.message} iconMessage={m.iconMessage}/>);
    let messagesRightElements = props.state.messagesRight.map(m => <Message message={m.message} iconMessage={m.iconMessage}/>);


    let newMessageElement = React.createRef();


    let addPost = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {massagesElements}
            </div>
            <div className={s.messagesRight}>
                {messagesRightElements}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
        </div>
    )

}

export default Dialogs;


/*
className={ navData => navData.isActive ? s.active : s.item }*/
