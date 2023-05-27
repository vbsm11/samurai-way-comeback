import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {ActionType, RootStateType} from './redux/state';

type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionType) => void
}

const App: React.FC<AppPropsType> = ({state, dispatch}) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar navbarState={state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() =>
                    <Profile
                        profileState={state.profilePage}
                        dispatch={dispatch}
                    />
                }/>
                <Route path="/dialogs" render={() =>
                    <Dialogs
                        dialogsState={state.dialogsPage}
                        dispatch={dispatch}
                    />}
                />
            </div>
        </div>
    );
}

export default App;
