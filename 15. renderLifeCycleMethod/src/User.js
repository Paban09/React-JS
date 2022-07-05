
import React,{Component} from "react";

class User extends Component{

    constructor(){
        super();
        this.state={
            email:"paban@gmail.com"
        }
    }

    render(){
        console.warn('render from user class component',this.props);
        return(
            <div> 
                <h1>This is from User Class Component</h1>
                <h2>Name: "{this.props.name}"  Email: "{this.state.email}"" </h2>
                <button onClick={()=>{this.setState({email:"masud@outlook.com"})}}>Update Email</button>
            </div>
        );
    }
}

export default User;