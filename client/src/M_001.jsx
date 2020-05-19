import React from 'react';
import { getData } from './variables/UserData';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';


const current_data = getData.filter((UserData) => {
    return UserData.CustomerID === 1;
    });


const M_001 = () => {
    return (
        <div className="M_001">
            <Sidebar />
            {current_data.map((UserData) => (
            <Header key={UserData.CustomerID} contests={UserData.CustomerName} />
            ))}
        </div>
    );
}

export default M_001;