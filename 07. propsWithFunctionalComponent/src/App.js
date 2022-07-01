
import Student from './Student';
import React,{useState} from 'react';

function App(){
    const [name,setName]=useState('Paban');
    const [email,setEmail]=useState('masd@gml.com');

    return (
      <div >
        <h1>Props in react</h1>
        <Student name={name} email={email}/>
        {/* <Student name={"Rana"} email={"adsf@ads.com"}/>
        <Student name={"Paban"} email={"adsf@ads.com"}/>
        <Student name={"Ayan"} email={"adsf@ads.com"}/> */}
        <div>
          <button onClick={()=>{setName("Masud")}}>Update </button>
          <button onClick={()=>{setEmail("masud@outlook.com")}}>Update Email </button>
        </div>
      </div>
    );

}

export default App;
