import './App.css';
import React,{Component} from 'react';
class Student extends Component{
    render(){
        // to check which props are passing
        console.log(this.props);
        return(
            <div className='App'>
                <h1>Student Class Component</h1>
                <h1>Student name is : {this.props.name}</h1>
                <h1>Student eamil is : {this.props.email}</h1>
            </div>
    );
  };   
}

export default Student;