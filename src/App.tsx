import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {RootStateType, updateNewMessageText} from './redux/state';

type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    sentMessage: () => void
    updateNewMessageText: (newText: string) => void
}

const App: React.FC<AppPropsType> = ({state, addPost, updateNewPostText, sentMessage, updateNewMessageText}) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar navbarState={state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile profileState={state.profilePage} addPost={addPost} updateNewPostText={updateNewPostText}/>}/>
                <Route path="/dialogs" render={() => <Dialogs dialogsState={state.dialogsPage} sentMessage={sentMessage} updateNewMessageText={updateNewMessageText}/>}/>
            </div>
        </div>
    );
}

export default App;
