import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
  return (
      <div className={s.profile}>
          <div>
              <img className={s.cover}
                   src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Spartak_Cup_of_Russia_2022_%282%29.jpg" alt='cover'/>
          </div>
          <div>
              ava + description
          </div>
          <div>
              My posts
              <div>
                  new post
              </div>
              <div className={s.posts}>
                  <div className={s.item}>
                      post 1
                  </div>
                  <div className={s.item}>
                      post 2
                  </div>
              </div>
          </div>
      </div>
  )
}