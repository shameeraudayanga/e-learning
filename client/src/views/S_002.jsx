import React, { useState } from 'react';
import { Card, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import getdata from '../variables/data';

import Answer from '../components/Answer_takemura';
import Questions from '../components/question'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Selection = () => {
    const classes = useStyles();
    const [page, setPage] = useState(1);

    const current_data = getdata.filter((data) => {
        return data.contents_detail_id === page;
    });
    const current_answer = current_data.map((data) => (<li key={data.contents_detail_id}>{data.answer}</li>));

    const handleChange = (event, value) => {
        setPage(value);
    };

    const current_choice1 = current_data.map((data) => (
        <li key={data.contents_detail_id} style={{ listStyle: 'none' }}>{data.choice1}</li>
    ));
    const current_choice2 = current_data.map((data) => (
        <li key={data.contents_detail_id} style={{ listStyle: 'none' }}>{data.choice2}</li>
    ));
    const current_choice3 = current_data.map((data) => (
        <li key={data.contents_detail_id} style={{ listStyle: 'none' }}>{data.choice3}</li>
    ));
    const current_choice4 = current_data.map((data) => (
        <li key={data.contents_detail_id} style={{ listStyle: 'none' }}>{data.choice4}</li>
    ));

    return (
        <div className={classes.root}>
            <Card>
                {current_data.map((data) => (
                    <Questions key={data.contents_detail_id}
                        contents={data.contents_statement}
                    />
                ))}
            </Card>
            {current_data.map((data) => (
                <Answer key={data.contents_detail_id}
                    answer={current_answer}
                    choice1={current_choice1}
                    choice2={current_choice2}
                    choice3={current_choice3}
                    choice4={current_choice4}
                />
            ))}
            <Pagination count={getdata.length} page={page} onChange={handleChange} />
        </div>
    );
}

export default Selection