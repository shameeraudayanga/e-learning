import React from 'react';
// import { getUserData } from '../Variables/M_User';
import Header from '../Compornent/Header';
import Sidebar from '../Compornent/Sidebar';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

// const current_data = getUserData.filter((M_User) => {
//     return M_User.user_id === 1;
//     });

const M_001 = () => {
  const [user, setUser] = useState([]);

  useEffect(() => getUserData());

  const getUserData = () => {
    if(user.length === 0) {
      axios
        .get('/api/userName/1')
        .then(response => {
          // console.log([response.data]);
          setUser(response.data);
          
        })
        .catch(() => {
          console.log('connected error');
        })
    }
  }

    return (
        <div className="M_001">
            <Sidebar />
            {user.map((data) => (
            <Header key={data.user_id} 
            contents={data.user_name} />  
            ))}
        </div>
    );
}
export default M_001;