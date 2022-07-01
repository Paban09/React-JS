import './App.css';
function Student(props){
    // console.log(props.name);
    return(
            <div className='App'>
                <h1>Student Function Component</h1>
                <h1>Hello {props.name}</h1>
                <h1>Email: {props.email}</h1>              
            </div>
    );
}

export default Student;