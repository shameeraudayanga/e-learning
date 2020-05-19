import React from 'react';
const Question = (props) => {
    return(
        <div>
            <h1>個人情報研修１</h1>
            {props.contents}
        </div>
    );
}
export default Question;