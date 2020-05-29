import React from 'react';

const Question = (props) => {



    return(
        <div className="Question">
            <h1>{props.contentsname}</h1>
            {props.contents}
        </div>
    );
}
export default Question;