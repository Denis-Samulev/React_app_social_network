import React from "react";
import style from './Dialogs.module.css'
import Messages from "./Messages/Messages";
import Contact from "./Contacts/Contacts";


const Dialogs = (props) => {
    let contactsElements = props.contacts.map((c) => <Contact key={c.id} id={c.id} name={c.name}/>)

    let messageElements = props.message.map((m) =><Messages key={m.id} message={m.message}/>)

    return (
        <div className={style.dialogs}>

            <div>

                { contactsElements }

            </div>

            <div>

                { messageElements }

            </div>

        </div>
    )
}


export default Dialogs;