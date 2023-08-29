import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user_photo.png'

export class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);

        axios.default('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items))
    }


    render() {
        return (
            <div>
                {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small? u.photos.small: userPhoto} alt='avatar' className={s.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => this.props.unfollow(u.id)}>
                                unfollow
                            </button>
                            : <button onClick={() => this.props.follow(u.id)}>
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
}
