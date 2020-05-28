import React from 'react';
<<<<<<< HEAD
import { getUserData } from '../Variables/M_User';
import { getContentsData } from '../Variables/M_Contents';
=======
>>>>>>> 7f4c8a0645873dd1cdbd419e1f98605453b68a1a
import Header from '../Compornent/Header';
import Sidebar from '../Compornent/Sidebar';
import axios from 'axios';
import { useState , useEffect } from 'react';

const M_001 = () => {
  const [user, setUser] = useState([]);

  useEffect(() => getUserData());

  const getUserData = () => {
    if(user.length === 0) {
      axios
        .get('/api/userName/1')
        .then(response => {
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