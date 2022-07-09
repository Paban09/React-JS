import React,{Component} from 'react';

class Student extends Component{
    componentWillUnmount(){
        alert("componentWillUnmount");
    }

    render(){
        return(
            <div>
                <h2>This is from Child Student component</h2>
            </div>
        );
    }
}

export default Student; 