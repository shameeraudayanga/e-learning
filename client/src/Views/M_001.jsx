import React from 'react';
import { getUserData } from '../Variables/M_User';
import Header from '../Compornent/Header';
import Sidebar from '../Compornent/Sidebar';
const current_data = getUserData.filter((M_User) => {
    return M_User.user_id === 1;
    });
const M_001 = () => {
    return (
        <div className="M_001">
            <Sidebar />
            {current_data.map((M_User) => (
            <Header key={M_User.user_id} 
            contents={M_User.user_name} />  
            ))}
        </div>
    );
}
export default M_001;