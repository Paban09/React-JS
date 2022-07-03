import {useState} from 'react';
import './App.css';
function App(){ 

  const [name,setName]=useState("");
  const [interest,setInterest]=useState("");
  const [tnc,setTnc]=useState(false);

  // here e stands for event 
  function getFormData(e){
    console.log(name,interest,tnc)
    //this function  stops the submission of the form
    e.preventDefault(); 
  }
  return (
    <div className='App'>
      <h1>React Form Handling</h1>
      <form onSubmit={getFormData}>

        <span>Name: </span>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/> 

        <br></br>

        <span>Interest: </span>
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>DC</option>
          <option>Bhramastra</option>
        </select>

        <br></br>

        <input type="checkBox" onChange={(e)=>setTnc(e.target.checked)}/> <span>Accept terms and conditions</span>

        <br></br>
        <br></br>

        <button type="Submit" className="submit-btn">Submit</button>
        <button className="submit-btn">Clear</button>

      </form>
    </div>
  );  
};
export default App;
