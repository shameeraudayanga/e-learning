import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import {getData} from './data';

const Selection = () => {

    const [corretness, setCorretness] = useState("");
    const answer = getData.map((data) => (<li key={data.content_detail_id}>{data.answer}</li>));
    // const answer = 3;

    const checkAnswer = (selected) => {
        if (selected == answer[0].props.children)  {
            setCorretness("正解です")
        } else {
            setCorretness("不正解です")
        }
    }

    return (
        <div>
            <p>{corretness}</p>
            <Button variant="contained" onClick={() => checkAnswer(1)}>選択肢①</Button>
            <Button variant="contained" onClick={() => checkAnswer(2)}>選択肢②</Button>
            <Button variant="contained" onClick={() => checkAnswer(3)}>選択肢③</Button>
            <Button variant="contained" onClick={() => checkAnswer(4)}>選択肢④</Button>
        </div>
    )
}

export default Selection;