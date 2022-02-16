import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Routes, Route} from "react-router-dom";




const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Routes>

                        <Route path="/profile" element={<Profile posts={props.posts} />} />
                        <Route path="/dialogs" element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />

                        {/*<Route path='/profile' render={ () => <Profile/>}/>*/}
                        {/*<Route path='/dialogs' render={ () => <Dialogs/>}/>*/}

                        {/*<Route path='/profile' element={<Profile/>}/>*/}
                        {/*<Route path='/dialogs' element={<Dialogs/>}/>*/}

                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;


{/*element={<Profile PostData={PostData}/>*/}


// <BrowserRouter>
//     <div className="app-wrapper">
//         <Header />
//         <Navbar />
//         <Routes>
//             <Route path="/" element={<Profile posts={props.posts} />} />
//             <Route path="/dialogs/" element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
//         </Routes>
//     </div>
// </BrowserRouter>