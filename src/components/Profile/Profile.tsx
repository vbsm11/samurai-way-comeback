import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
  return (
      <div className={s.profile}>
          <div className={s.cover}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Spartak_Cup_of_Russia_2022_%282%29.jpg" alt='cover'/>
          </div>
          <div>
              ava + description
          </div>
          <MyPosts/>
      </div>
  )
}