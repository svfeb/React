import { useState,useEffect} from 'react';

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

export function DigitalClock(){
    const [date,setDate] = useState(new Date()); 

    function tick(){
      setDate(new Date());
  }
    useEffect(()=>{
      const timerId = setInterval(tick,1000)
      return () => clearInterval(timerId);  
    },[])
  
    return (<span>{date.toLocaleTimeString()}</span>)


  }
