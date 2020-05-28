import React from 'react';

const Question = (props) => {
    return(
        <div className="Question">
            <h1>{props.contentsquestion}</h1>
            {props.contentstext}
        </div>
    );
}
export default Question;