import React, { useState } from 'react';
import './subject-right.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SubjectRight = (props) => {
    const {subjectsAdd }= props;
    const [brak, setBrak] = useState([0]);
    let newTime = 0;
    for (const subject of subjectsAdd) {
        newTime = newTime + subject.timeRequired

    }
    const notify = () => toast("Congratulation ! has done your activity");
    
    const reptiles = [1,2,3,4];
    

    const time =(reptile)=>{
        const newSubject = [reptile];
        setBrak(newSubject);
        
        
        }

    return (

        
        
        <div className='right'>

            <h2 className='h1'>Name: Md. Solyman Hossen.</h2>
            <p className='p'>Kid web developer</p>
            <div className='flex background'> <p><b>Age:</b>22y</p><p><b>Weight:</b>75kg</p></div>
            <br />
            <br />
            <h3 className='h1'>Add A Break</h3>
            <div className='flex'>{reptiles.map(reptile => ( 
    
    <p className='circle' onClick={()=>time(reptile)} key={reptile} >{reptile} <span>m</span></p>  
  ))}</div>
            
            <h3>Details while reading</h3>
            

            

            
  <p className='background'>Reading time: {newTime}m</p>

            <p className='background'>
            Break time: {brak}m
            </p>
            <div className='btn'>
        <button className='button' onClick={notify}>Activity Completed</button>
        <ToastContainer />
      </div>

            
        </div>
    );
};

export default SubjectRight;