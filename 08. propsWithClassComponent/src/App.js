
import Student from './Student';
import React from 'react';
class App extends React.Component{     
  // difining state
  constructor(){
    super();
    this.state={
      name:"Paban",
      email: "Paban@gmail.com"
    }
  }
  
    render(){
      return (
        <div >
          {/* working as a prop and sending data to Student Class*/}
          {/* <Student name="Masud" email="masud@gmail.com"/>  */}

          <Student name={this.state.name} email={this.state.email}/> 
          <button onClick={()=>{this.setState({name:"Masud",email:"masud@gmail.com"})}}>Update Name</button>
        </div>
      );
    }

}

export default App;
