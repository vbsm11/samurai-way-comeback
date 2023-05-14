import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type DialogsType = {
    id: string
    name: string
}

export type MessagesType = {
    id: string
    message: string
}

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

const dialogs: DialogsType[] = [
    {id: '1', name: 'Georgiy'},
    {id: '2', name: 'Quincy'},
    {id: '3', name: 'Roman'},
    {id: '4', name: 'Alexandr'},
    {id: '5', name: 'Ruslan'},
]

const messages: MessagesType[] = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'Goodbye'},
]

const posts: PostsType[] = [
    {id: '1', message: 'Hi, how are you?', likesCount: 15},
    {id: '2', message: 'It is my first post', likesCount: 20}
]

ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts}/>,
  document.getElementById('root')
);