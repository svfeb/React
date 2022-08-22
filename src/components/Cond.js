import React from 'react';

function User(props){
    return <h1>Welcome Back</h1>
}

function NewUser(props){
    return <h1>Please sign up</h1>
}

function Access(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <User/>;
    }
    return <NewUser/>;
}

function LoginButton(props){
    return(
        <button onClick={props.onClick}>Login</button>
    )
}
function LogoutButton(props){
    return (
        <button onClick = {props.onClick}>Logout</button>
    )
}


export {Access,LoginButton,LogoutButton};