import React, { useState } from 'react';
import { getData } from './data';

const GetData = () => {
    const[page, setPage] = useState(1);

    const current_data = getData.filter((data) => {
        if (page === 1){
            return data.CustomerID ===1;
        } else if (page ===2){
            return data.CustomerID ===2;
        }
    });

    const prev = () => {
        setPage(page - 1);
    }
    const next = () => {
        setPage(page + 1);
    }

    return(
        <div>
            {current_data.map((data) => {
              <li key={data.CustomerID} style={{listStyle='none'}}>
                  顧客名：{data.CustomerName}　住所：{data.Address}
              </li>
            })}　
            <button onClick={prev}></button>
            <button onClick={next}></button>
        </div>
    );
}
export default getData;