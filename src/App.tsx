import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import {ProfileContainer} from './components/Profile/ProfileContainer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {Login} from './components/Login/Login';


const App: React.FC = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavbarContainer/>
            <div className="app-wrapper-content">
                <Route path="/profile/:userId?" render={() =>
                    <ProfileContainer/>
                }/>
                <Route path="/dialogs" render={() =>
                    <DialogsContainer/>}
                />
                <Route path="/users" render={() =>
                    <UsersContainer/>}
                />
                <Route path="/login" render={() =>
                    <Login/>}
                />
            </div>
        </div>
    );
}

export default App;
