import React from 'react';

const SubjectLeft = (props) => {

    console.log(props.subject)
    const{id, subName,subjectDetails,timeRequired}=props.subject




    return (
        <div>
          <h1>{timeRequired}</h1>

        </div>
    );
};

export default SubjectLeft;