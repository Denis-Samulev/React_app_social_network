import React from "react";
import style from './Dialogs.module.css'
import Messages from "./Messages/Messages";
import Contact from "./Contacts/Contacts";



let contacts = [
    {id: 1, name: 'Dmitry'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Valera'},
    {id: 5, name: 'Viktor'}
]
let contactsElements = contacts.map((c) => <Contact key={c.id} id={c.id} name={c.name}/>)


let message = [
    {id: 1, message: 'Lorem ipsum dolor sit amet.'},
    {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
    {id: 3, message: 'Lo ipsum dolor sit amet, consectetur adipisicing elit. Nemo, rem!'},
]
let messageElements = message.map((m) =><Messages key={m.id} message={m.message}/>)


const Dialogs = (props) => {

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