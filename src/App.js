import React from 'react';
import  { useState } from 'react';

import ReactDOM from 'react-dom';

import './App.css';

const Button =(probs)=>( <button onClick={probs.handleClick}>{probs.text}</button>)

/*const GetAverage =({probs})=>
{const [average,setAverage] =useState(0)
  
 setAverage((probs.good-probs.bad)/probs.all);

return(<div>{average}</div>
)

}*/
function GetAverage(average,good,bad,all)
{
  
     average=(good-bad)/all;
     return average;
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allva,setAll] = useState(0)
  const [average,setAverage] = useState(0);

 /* const handleAverage=()=>
  {
    setAverage(state=>({average:(good-bad)/all}));
  }*/


const handleGood=()=>{
  
  setAll(allva+1);
  setGood(good+1);
  setAverage(GetAverage(average,good,bad,allva))
}

const handleNeutral=()=>{
setAll(allva+1);
setNeutral(neutral+1)
setAverage(GetAverage(average,good,bad,allva))
}

const handleBad=()=>{
  setAll(allva+1);
  setBad(bad+1)
  setAverage(GetAverage(average,good,bad,allva))
  }
  return (
    <div className='App-header'>
    <h1>Give FeedBack</h1>
    <Button handleClick={handleGood} text='Good'/> 
    <Button handleClick={handleNeutral} text='Neutral'/>
    <Button handleClick={handleBad} text='Bad'/>
    <h2>Statistics</h2>
      <br/>
         good={good}  <br/> neutral= {neutral} <br/>    bad={bad}
         <br/> All={allva} <br/> Average={average}
         
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

export default App;
