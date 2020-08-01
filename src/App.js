import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/Nav-bar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


const App = () => {
    return(
        <div className='app-wrapper'>
            < Header />
            < NavBar />

            <Route path='/profile' component= {Profile} />
            <Route path='/dialogs' component= {Dialogs} />

        </div>
    )
}


export default App;
