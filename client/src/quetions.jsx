import React from 'react';
import { getData } from './variables/data'

const Question = () => {
    return (
        <div>
            <div>
            <h3>個人情報保護研修①</h3>
            {getData.map((data) => (
            <li key={data.contents_id} style={{listStyle:'none'}}>問題文：{data.contents_statement}</li>
            ))}
            </div>
        </div>
    );
}
export default Question;