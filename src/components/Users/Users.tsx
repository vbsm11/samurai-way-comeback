import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'
import * as axios from 'axios'

export const Users: React.FC<UsersPropsType> = (props) => {
    if (props.users.length === 0) {
        axios.default('https://social-network.samuraijs.com/api/1.0/users')
            .then(response =>  props.setUsers(response.data.items))
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small? u.photos.small: ''} alt='avatar' className={s.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.unfollow(u.id)}>
                                unfollow
                            </button>
                            : <button onClick={() => props.follow(u.id)}>
                                follow
                            </button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}