import React from 'react';
import '../Assets/Question.css'

const Question = (props) => {
    return(
        <div>
            <h1>{props.contentsquestion}</h1>
            {props.contentstext}
        </div>
    );
}
export default Question;