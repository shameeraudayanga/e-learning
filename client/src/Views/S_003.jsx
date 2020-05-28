import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/paper';
import Answerjudge from '../Compornent/Answerjudge';
import { Grid } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import '../Assets/S_003.css'

const S_003 = () => {
  const[posts,setPosts] = useState([]);

  useEffect(() => getData());

  const getData = () => {
    if(posts.length === 0){
    axios
      .get('/api/question/1')
      .then(response =>{
        setPosts(response.data);
        // console.log([response.data]);
      })
      .catch(() => {
        console.log('connected error');
      })
  }
}

const current_data = posts.filter((data) => {
    return data.contents_detail_id});

    return(
        <body className="body">
        <Paper　className="paper">
          <div className="registration"> 
          {/* {current_data.map((data) => (
                <Answerjudge key={data.contents_detail_id} 
                contentsname={data.contents_name}
                />
            ))} */}
            <Answerjudge />
          </div> 
          <div className="content">
            <p>全ての問題に正解しました。</p>
            <p>この内容を登録しますか？</p>
            <Grid　className="button"><Button variant="contained">登録する</Button></Grid>
          </div> 
        </Paper>
        </body>
       )
      }


export default S_003;