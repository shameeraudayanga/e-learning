import React from 'react';
import { getData } from './variables/data';
const Question = () => {
    return (
        <div>
            <div>
                <p>個人情報保護研修①</p>
                {getData.map((data) => (
                <li key={data.contents_id} style={{listStyle:'none'}}>問題文：{data.contents_statement}</li>
                ))}
            </div>
            <div>
                {getData.map((data) => (
                <button key={data.contents_id}>{data.choice1}</button>
                ))}
                {getData.map((data) => (
                <button key={data.contents_id}>{data.choice2}</button>
                ))}
                {getData.map((data) => (
                <button key={data.contents_id}>{data.choice3}</button>
                ))}
                {getData.map((data) => (
                <button key={data.contents_id}>{data.choice4}</button>
                ))}
            </div>
            <div>
                {getData.map((data) => (
                <button key={data.contents_id}>{data.answer}</button>
                ))}
            </div>
            <div>1/10</div>
        </div>
    );
}
export default Questions