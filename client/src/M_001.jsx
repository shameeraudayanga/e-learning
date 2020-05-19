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
            {current_data.map((UserData) => (
            <Sidebar key = {UserData.CustomerName} 
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