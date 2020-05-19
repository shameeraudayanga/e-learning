import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import getData from '../variables/data';

const Answer = (props) => {

    const [corretness, setCorretness] = useState("");
    // const answer = getData.map((data) => (<li key={data.content_detail_id}>{data.answer}</li>));

    const handleClick = (selected) => {
        if (selected === props.answer[0].props.children) {
            setCorretness("正解です")
        } else {
            setCorretness("不正解です")
        }
    }

    return (
        <div>
            <p>{corretness}</p>
            <Button variant="contained" onClick={() => handleClick(1)}>{props.choice1}</Button>
            <Button variant="contained" onClick={() => handleClick(2)}>{props.choice2}</Button>
            <Button variant="contained" onClick={() => handleClick(3)}>{props.choice3}</Button>
            <Button variant="contained" onClick={() => handleClick(4)}>{props.choice4}</Button>
        </div>
    )
}

export default Answer;