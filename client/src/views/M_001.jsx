import React from 'react';
import { getUserData } from '../variables/M_User';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
const current_data = getUserData.filter((M_User) => {
    return M_User.user_id === 1;
    });
const M_001 = () => {
    return (
        <div className="M_001">
            {current_data.map((M_User) => (
            <Sidebar key = {M_User.user_id}
            curriculum = {M_User.CurriculumName}
            test = {M_User.TestName}/>
            ))}
            {current_data.map((M_User) => (
            <Header key={M_User.user_id} contents={M_User.user_name} />
            ))}
        </div>
    );
}
export default M_001;