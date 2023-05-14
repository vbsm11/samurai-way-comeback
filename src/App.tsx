import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogsType, MessagesType, PostsType} from './index';

type AppPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    posts: PostsType[]
}

const App: React.FC<AppPropsType> = ({dialogs, messages, posts}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile posts={posts}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
