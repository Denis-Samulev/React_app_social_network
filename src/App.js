import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/Nav-bar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


const App = (props) => {

    return(
        <div className='app-wrapper'>
            < Header />
            < NavBar />

            <Route path='/profile' render= {() => <Profile state={props.state.profilePage}
                                                           addPost={props.addPost}/>} />

            <Route path='/dialogs' render= {() => <Dialogs contacts={props.state.dialogsPage.contacts}
                                                              message={props.state.dialogsPage.message}/>} />

        </div>
    )
}


export default App;
