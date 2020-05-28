import React, { useState } from 'react';
import Header from '../Compornent/Header';
import Sidebar from '../Compornent/Sidebar';
import axios from 'axios';
import { useEffect } from 'react';

const M_001 = () => {
    const [user, setUser] = useState([]);

    useEffect(() => getUserData());

    const getUserData = () => {
        if(user.length === 0){
            axios
                .get('/api/userName/1')
                .then(response => {
                    setUser(response.data);
                })
                .catch(() => {
                    console.log('connected error');
                })
    }}

    return (
        <div className="M_001">
            <Sidebar />
            {user.map((M_User) => (
            <Header key={M_User.user_id} 
            contents={M_User.user_name} />  
            ))}
        </div>
    );
}
export default M_001;