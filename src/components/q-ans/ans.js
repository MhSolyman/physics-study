import React from 'react';
import './q-ans.css'

const Ans = () => {
    return (
        <div className='ans'>
            <h2>Q1: How does react work?
            </h2>
            <p>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. <br />
                React components work similarly to JavaScript functions as they accept arbitrary inputs called <br />
                properties or props. It's possible to have as many components as necessary without cluttering your code.</p>

            <h2>Q2: What is the difference between Props and State?</h2>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is <br />
                local to the component only and cannot be passed to other components.
                State is the local state of the component which cannot be accessed and modified outside of the component. <br />
                It's equivalent to local variables in a function. Props, on the other hand, make components reusable by <br />
                giving components the ability to receive data from their parent component in the form of props.</p>
<h2>Q3: What is the use effect used for?</h2>
<p>Ans: By using this Hook, you tell React that your component needs to do something after render. React will remember the <br /> 
function you passed well refer to it as our “effect”, and call it later after performing the DOM updates. In this effect, we <br />
 set the document title, but we could also perform data fetching or call some other imperative API.
 Running once on mount: fetch API data. <br />
Running on state change: validating input field. <br />
Running on state change: live filtering. <br />
Running on state change: trigger animation on new array value. <br />
Running on props change: update paragraph list on fetched API data update.</p>
        </div>

    );
};

export default Ans;