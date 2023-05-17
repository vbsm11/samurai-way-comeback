import React from 'react';
import './index.css';
import {state, subscribe} from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, sentMessage, updateNewMessageText, updateNewPostText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} sentMessage={sentMessage} updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)