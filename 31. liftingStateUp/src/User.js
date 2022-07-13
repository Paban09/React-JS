
function User(props){
    const name = "Paban"
    return(
        <div>
            <h1>User Component</h1>
            <h3>User name :: </h3>
            <button onClick={()=>props.alert(name)}>Click Me</button>
        </div>
    )
}

export default User;
