import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Answerjudge = () => {
  const[names,setNames] = useState("");

  useEffect(() => getData());

  const getData = () => {
    if(names.length === 0){
    axios
      .get('/api/complete/1')
      .then(response =>{
        setNames(response.data);
        // console.log(response.data);
      })
      .catch(() => {
        console.log('connected error');
      })
  }
}}

// const current_data1 = names.filter((data) => {
//   return data.contents_detail_id});

  const S_003 = (props) => {
  return(
    <div>
      {/* {current_data1.map((data) => (
       <Answerjudge key={data.contents_detail_id} 
        contentsname={data.contents_name}
       />
      ))}  */}
    {props.contentsname}
    {/* <h>hello</h> */}
    </div>
  )}

export default S_003;