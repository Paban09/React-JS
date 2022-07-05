import User from './User';
import Members from './Members';

import './App.css';
function App(){ 

  function getData(){
    alert('Hello from app');
  }
  return (
    <div className='App'>
      <h1>Pass Function as Props</h1>
      <User data={getData}/>
      <Members data={getData}/>

    </div>
  );  
};
export default App;
