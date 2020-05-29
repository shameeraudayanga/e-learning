import React, {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { response } from 'express';


const Answerjudge = () => {
  const[name, setName] = useState([]);

  useEffect(() => getData());

  const getData = () => {
    if(name.length === 0){
      axios
        .get('/api/complete/1')
        .then(response =>{
            setName(response.data);
        })
        .catch(() => {
           console.log('connected error');  
       })
    }
  }

  const current_data = name.filter((data) => {
    return data.contents_detail_id});


  return(
    <div className="name">
      {current_data.map((data) => (
        <Answerjudge key={data.contents_detail_id} 
        contentsname={data.contents_name} />
      ))}
    {/* <h>{data.contents_name}</h> */}
    </div>
  )}

export default Answerjudge;

    {/* <h1>{props.contentsname}</h1> */}