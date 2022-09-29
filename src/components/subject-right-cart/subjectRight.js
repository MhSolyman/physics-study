import React from 'react';
import './subject-right.css'

const SubjectRight = (props) => {
   
    console.log(props)
    return (
        <div className='right'>
            <h1>amr sonar bangla {props.subject}</h1>
        </div>
    );
};

export default SubjectRight;