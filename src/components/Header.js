import React from 'react';
// import ReactDOM from 'react-dom/client';

export function Header(props){
    
return (
    
    <div>
        <h1>Hello {props.name} {props.lastName}</h1>
        {props.children}


    </div>
)
}

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
export function Element (){
    return (<h1>
      Hello, {formatName(user)}!
    </h1>
  )};
//   const root = ReactDOM.createRoot(document.getElementById('root'));

// export function Tick(){
//     const element = (

//     <div>    
//       <h2>{new Date().toLocaleTimeString()}</h2>
//     </div>
//     )
//     root.render(element)
  
//   }
// setInterval(Tick,1000)
