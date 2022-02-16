import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: 'Siarhei'},
    {id: 2, name: 'Viktor'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Dasha'},
    {id: 5, name: 'Katya'},
    {id: 6, name: 'Lena'}
]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Y01'},
    {id: 5, message: 'Yo2'},
    {id: 6, message: 'Yo2'}
]
let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'Its my first post', likesCount: 11},
    {id: 3, message: 'blablabala', likesCount: 11},
    {id: 4, message: 'Dada', likesCount: 11}
];


ReactDOM.render(
    <React.StrictMode>
        <App dialogs={dialogs} messages={messages} posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



