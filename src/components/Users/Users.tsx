import React from 'react'
import s from './Users.module.css';
import userPhoto from '../../assets/images/user_photo.png';
import {UserType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    IsFollowingInProgress: number[]

    onPageChanged: (newPage: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => (
                    <span
                        key={p}
                        onClick={() => props.onPageChanged(p)}
                        className={props.currentPage === p ? s.selected : ''}
                    >{p} </span>
                ))}
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar"
                                 className={s.usersPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button
                                onClick={() => props.unfollow(u.id)}
                                disabled={props.IsFollowingInProgress.some(id => id === u.id)}
                            >
                                unfollow
                            </button>
                            : <button
                                onClick={() => props.follow(u.id)}
                                disabled={props.IsFollowingInProgress.some(id => id === u.id)}
                            >
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