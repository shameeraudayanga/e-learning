import React from 'react';
import '../Assets/Answerjudg.css';

const Answerjudg = (props) =>{
    return(
        <div className='aunserjudg'>
            <h1 >{props.contentsquestion}</h1>
            <p1>全ての問題に正解しました！</p1>
            <p2>この内容を登録しますか？</p2>
        </div>
    );
}
export default Answerjudg;