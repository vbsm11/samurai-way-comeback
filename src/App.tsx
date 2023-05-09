import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://sun1.userapi.com/sun1-13/s/v1/if2/NbJL93ZxY5d6qtEaynW_ba2A3lshp2pfx7pOAOehLmutJsX27QSVMidbHeMz07bC35ir1oCKsaBVb8QogfsY_BE1.jpg?size=1080x1080&quality=95&type=album"
                    alt="logo"/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img className="cover"
                         src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Spartak_Cup_of_Russia_2022_%282%29.jpg" alt='cover'/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    posts
                    <div>
                        new post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
