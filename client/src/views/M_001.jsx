import React from 'react';
import { getUserData } from '../variables/M_User';
import { getContentsData } from '../variables/M_Contents';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const current_data = getUserData.filter((M_User) => {
    return M_User.user_id === 1;
    });
const contents_data = getContentsData.filter((M_Contents) => {
    return M_Contents.contents_id === 2;
    });

const M_001 = () => {
    return (
        <div className="M_001">
            {contents_data.map((M_Contents) => (
            <Sidebar key = {M_Contents.contents_id}
            type = {M_Contents.contents_type}
            name = {M_Contents.contents_name}/>
            ))}
            {current_data.map((M_User) => (
            <Header key={M_User.user_id} 
            contents={M_User.user_name} />  
            ))}
        </div>
    );
}
export default M_001;