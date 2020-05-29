import React from 'react';
import '../Assets/Result.css';
import Paper from '@material-ui/core/paper';
import Button from '@material-ui/core/Button';

const Result = () => {
    return(
        <Paper elevation={3}　className='paper'>
            <div className='question'>
                <h1>個人情報研修①</h1>
            </div>
            <div className='statement'>
                <p>全ての問題に正解しました！</p>
            </div>
            <div className='statement'>
                <p>この内容を登録しますか？</p>
            </div>
            <div className='result'>
            <Button variant="contained">登録する</Button>
            </div>
        </Paper>
    );
}
export default Result;