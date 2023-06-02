import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {StoreType} from './redux/redux-store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = ({store}) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar navbarState={store.getState().sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() =>
                    <Profile
                        store={store}
                    />
                }/>
                <Route path="/dialogs" render={() =>
                    <DialogsContainer
                        store={store}
                    />}
                />
            </div>
        </div>
    );
}

export default App;
