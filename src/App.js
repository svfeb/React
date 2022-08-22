
import {Header,Element} from './components/Header';
import {Clock,ClassHeader} from './components/ClassHeader';
import Channel from './components/Channel';

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
  </div>)
}
