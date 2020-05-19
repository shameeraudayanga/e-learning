import React from 'react';
import { getData } from './variables/UserData';
import Header from './components/Header';
import Sidebar2 from './components/Sidebar2';
const current_data = getData.filter((UserData) => {
    return UserData.CustomerID === 2;
    });
const M_001 = () => {
    return (
        <div className="M_001">
            {current_data.map((UserData) => (
            <Sidebar2 key = {UserData.CustomerName}
            curriculum = {UserData.CurriculumName}
            test = {UserData.TestName}/>
            ))}
            {current_data.map((UserData) => (
            <Header key={UserData.CustomerID} contents={UserData.CustomerName} />
            ))}
        </div>
    );
}
export default M_001;