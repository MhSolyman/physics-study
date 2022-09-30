import React, { useEffect, useState } from 'react';
import SubjectLeft from '../subject-left-all-cart/subjectLeft';
import SubjectRight from '../subject-right-cart/subjectRight';
import './subject.css'


const Subject = () => {
    const [subjects, setSubjects] = useState([]);
    const [subjectsAdd, setSubjectsAdd] = useState([]);


    useEffect(() => {
        fetch('physicsListOne.json')
            .then(res => res.json())
            .then(data => setSubjects(data))

    }, [])
    const addSubject =(subject)=>{
        const newSubject = [...subjectsAdd,subject];
        setSubjectsAdd(newSubject);
        
        }
    return (
        <div className='subject'>
            <div className='subject-container'>
                {
                    subjects.map(subject => <SubjectLeft
                        key={subject.id}
                        subject={subject}
                        addSubject={addSubject}
                    ></SubjectLeft>)
                }
            </div>
            <div>
                <SubjectRight subjectsAdd={subjectsAdd}>

                </SubjectRight>
                
                

            </div>



        </div>
    );
};

export default Subject;