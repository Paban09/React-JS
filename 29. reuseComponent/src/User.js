

function User(props){
    return(
        <div>
            <span>{props.user.id}</span>
            <span>{props.user.name}</span>
            <span>{props.user.email}</span>
            <span>{props.user.phone}</span>
         </div>
         )
}

export default User;