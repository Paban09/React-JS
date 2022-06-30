
import './App.css';
import React,{Component} from 'react';

class App extends Component {

  constructor(){
    super(); 
    this.state={data:'Masud'}
  }

  updateData(){
    this.setState({data:'Paban'});
  }

  render(){
    return (
      <div className="App">
          State in Class Component
          <h1>{this.state.data}</h1>
        <div>
          <button onClick={()=>this.updateData()}>Update Data</button>
          </div>
      </div>
    );
  
  }
    
  
}

export default App;
