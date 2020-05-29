import React from 'react';
import '../Assets/Answerjudge.css';

const Answerjudge =(props) => {

    return (
        <h1 className='Answerquestion'>
            {props.contentsname}
            </h1>
    )
}

export default Answerjudge;