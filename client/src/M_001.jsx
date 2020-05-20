import React from 'react';
import { getData } from './variables/UserData';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
const current_data = getData.filter((UserData) => {
    return UserData.CustomerID === 1;
    });
const M_001 = () => {
    return (
        <div className="M_001">
            {current_data.map((UserData) => (
            <Sidebar key = {UserData.CustomerName}
            curriculum = {UserData.CurriculumName}
            test = {UserData.TestName}
            text = {UserData.Text}/>
            ))}
            {current_data.map((UserData) => (
            <Header key={UserData.CustomerID} contents={UserData.CustomerName} />
            ))}
        </div>
    );
}
export default M_001;