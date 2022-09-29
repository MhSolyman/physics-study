import React from 'react';
import './subject-left.css'

const SubjectLeft = (props) => {

    
    const{img,id, subName,subjectDetails,timeRequired}=props.subject




    return (
        <div className='left'>
          <img className='img' src={img} alt="" />
          <h1>{timeRequired}</h1>

        </div>
    );
};

export default SubjectLeft;