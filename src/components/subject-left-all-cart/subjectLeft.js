import React from 'react';
import './subject-left.css'

const SubjectLeft = (props) => {
  const {addSubject}= props;

     
    const{img,subName,subjectDetails,timeRequired}=props.subject

    


    return (
        <div className='left'>
          <div className='left-container'>
          <img className='img' src={img} alt="" />
          <h2>{subName}</h2>
          <p>{subjectDetails}</p>
          <h3><b>Reading time: {timeRequired} min</b></h3>
          <div className='btn'>
          <button onClick={()=>addSubject(props.subject)} className='button'>Add to list</button>
          </div>
          </div>
          
          

        </div>
    );
};

export default SubjectLeft;