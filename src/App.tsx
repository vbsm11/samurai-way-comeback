import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import {Users} from './components/Users/Users';


const App: React.FC = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavbarContainer/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() =>
                    <Profile

                    />
                }/>
                <Route path="/dialogs" render={() =>
                    <DialogsContainer/>}
                />
                <Route path="/users" render={() =>
                    <Users/>}
                />
            </div>
        </div>
    );
}

export default App;
