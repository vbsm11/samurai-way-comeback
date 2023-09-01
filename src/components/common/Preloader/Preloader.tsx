import preloader from '../../../assets/images/preloader.gif';
import React from 'react';

export const Preloader: React.FC = () => {
   return (
       <div>
          <img src={preloader} alt='loading'/>
       </div>
   )
}