import React from 'react';
import { getUserData } from '../variables/M_User';
import { getContentsData } from '../variables/M_Contents';
import { getTypeData } from '../variables/M_Contents_Type';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
const current_data = getUserData.filter((M_User) => {
    return M_User.user_id === 1;
    });
const M_001 = () => {
    return (
        <div className="M_001">
            {current_data.map((M_Contents,M_User) => (
            <Sidebar key = {M_Contents.target_user = M_User.user_id} 
            curriculum = {M_Contents.contents_name}
            test = {M_Contents.contents_name}/>
            ))}
            {current_data.map((M_User) => (
            <Header key={M_User.user_id} 
            contents={M_User.user_name} />  
            ))}
        </div>
    );
}
export default M_001;