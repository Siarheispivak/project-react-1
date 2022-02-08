import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={app - wrapper - content}>
                    <Route path='/dialog' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>

                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
