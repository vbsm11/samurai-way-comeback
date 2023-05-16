import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {RootStateType} from './redux/state';

type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
}

const App: React.FC<AppPropsType> = ({state, addPost}) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar navbarState={state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile profileState={state.profilePage} addPost={addPost}/>}/>
                <Route path="/dialogs" render={() => <Dialogs dialogsState={state.dialogsPage}/>}/>
            </div>
        </div>
    );
}

export default App;
