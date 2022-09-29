import React, { useEffect, useState } from 'react';
import SubjectLeft from '../subject-left-all-cart/subjectLeft';
import SubjectRight from '../subject-right-cart/subjectRight';
import './subject.css'

const Subject = () => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch('physicsListOne.json')
            .then(res => res.json())
            .then(data => setSubjects(data))

    }, [])
    return (
        <div className='subject'>
            <div>
                {
                    subjects.map(subject => <SubjectLeft
                        key={subject.id}
                        subject={subject}
                    ></SubjectLeft>)
                }
            </div>
            <div>
                <SubjectRight>

                </SubjectRight>
            </div>



        </div>
    );
};

export default Subject;