import React, { useState } from 'react';
import './subject-right.css'

const SubjectRight = ({ subjectsAdd }) => {
    const [brak, setBrak] = useState([]);
    let newTime = 0;
    for (const subject of subjectsAdd) {
        newTime = newTime + subject.timeRequired

    }
    
    const reptiles = [1,2,3,4];
    

    const time =(reptile)=>{
        const newSubject = [reptile];
        setBrak(newSubject);
        
        }

    return (

        
        
        <div className='right'>
            

      

          
            
            <h3 className='h1'>Name: Md. Solyman Hossen.</h3>
            <p className='p'>Kid web developer</p>
            <h3 className='h1'>Add A Break</h3>
            <div className='flex h1'>{reptiles.map(reptile => ( 
    
    <p onClick={()=>time(reptile)} key={reptile} >{reptile} <span>m</span></p>  
  ))}</div>
            
            <h3>amr sonar bangla {subjectsAdd.length}</h3>

            

            
  <p>{newTime}</p>

            <h1>
                {brak}
            </h1>
            
        </div>
    );
};

export default SubjectRight;