import React from 'react';

const Question = (props) => {
    return (
        <div>
            <h3>個人情報保護研修①</h3>
            {props.contents}
        </div>
    );
}
export default Question;