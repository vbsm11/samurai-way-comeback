import React from 'react';
import '../App.css';

export const Profile = () => {
  return (
      <div className="profile">
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
  )
}