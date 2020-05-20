import React from 'react';
<<<<<<< HEAD
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
            <Sidebar key = {UserData.CustomerID}
            curriculum = {UserData.CurriculumName}
            test = {UserData.TestName}/>
            ))}
            {current_data.map((UserData) => (
            <Header key={UserData.CustomerID} contents={UserData.CustomerName} />
            ))}
        </div>
    );
}
=======
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { getData } from './variables/UserData';


    const current_data = getData.filter((UserData) => {
         return UserData.CustomerID === 1;
            });  

        const M_001 = () => {
            return(
            <div className="M_001">
            {current_data.map((UserData) => (
                <Header key={UserData.CustomerID} 
                contents={UserData.CustomerName} />  
                ))}

            {current_data.map((UserData) => (        
                <Sidebar key={UserData.CustomerID}
                contents1={UserData.CurriculumName} 
                contents2={UserData.CurriculumName2} 
                contents1_1={UserData.CurriculumName} 
                contents2_1={UserData.CurriculumName2} />
            ))}

        
            </div>
            );
        }  

>>>>>>> a758f1b41ed6c009dbe79ead9e272452bd658a9b
export default M_001;