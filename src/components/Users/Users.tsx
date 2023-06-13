import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'

export const Users: React.FC<UsersPropsType> = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                fullName: 'Georgiy',
                photoUrl: 'https://pictures.sports.ru/NkyqqQSzzxQxqdz2ZOkG_Xw2tvjqW58GyH-E9nM_f00/fill/150/150/no/1/czM6Ly9zdGF0X3BpY3R1cmUvUExBWUVSL2F2YXRhci9nZW9yZ2lfZHpoaWtpeWEucG5n.png',
                status: 'captain',
                location: {
                    city: 'Balashikha',
                    country: 'Russia'
                }
            },
            {
                id: 2,
                followed: true,
                fullName: 'Quincy',
                photoUrl: 'https://pictures.sports.ru/nqCrRC97O7ntFiQu0HuWC68cr2GPLkndIvflv8vwIXU/fill/150/150/no/1/czM6Ly9zdGF0X3BpY3R1cmUvUExBWUVSL2F2YXRhci9xdWluY3lfcHJvbWVzLnBuZw.png',
                status: 'joker',
                location: {
                    city: 'Amsterdam',
                    country: 'Netherlands'
                }
            },
            {
                id: 3,
                followed: false,
                fullName: 'Roman',
                photoUrl: 'https://pictures.sports.ru/PJnwDEG50OgJKHtHle2aSqObd02fXZD-OuvtP_uzsfo/fill/150/150/no/1/czM6Ly9zdGF0X3BpY3R1cmUvUExBWUVSL2F2YXRhci9yb21hbl96b2JuaW4ucG5n.png',
                status: 'machine',
                location: {
                    city: 'Moscow',
                    country: 'Russia'
                }
            },
            {
                id: 4,
                followed: false,
                fullName: 'Alexandr',
                photoUrl: 'https://pictures.sports.ru/7ZW3zTTA9MLECjntiQ9Uyth_aqt7qYImP0n3v6PJdWQ/fill/150/150/no/1/czM6Ly9zdGF0X3BpY3R1cmUvUExBWUVSL2F2YXRhci9hbGVrc2FuZHJfc29ib2xldi5wbmc.png',
                status: 'striker',
                location: {
                    city: 'Barnaul',
                    country: 'Russia'
                }
            }
        ])
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.usersPhoto}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}