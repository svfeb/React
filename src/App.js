
import {Header,Element,DigitalClock} from './components/Header';
import {Clock,ClassHeader} from './components/ClassHeader';
import Channel from './components/Channel';
import {Access,LoginButton,LogoutButton} from "./components/Cond"
import FunctionClick from './components/FunctionClick';

export function App(){
  return ( <div>
    <Header/>
    <Header name="xyz" lastName="z">
      <p>How are you?</p>
      <button href ="">Click Here</button>
    </Header>
    <Header name = "Punnet" lastName="" />
    <ClassHeader name = "sv">
      <p>hi</p>
    </ClassHeader> 
    <Clock/>
    <Element />
    <Channel/>
    <Access isLoggedIn = {true}/>
    <LoginButton/>
    <LogoutButton/> 
    <FunctionClick/>
    <DigitalClock/>

  </div>)
}

