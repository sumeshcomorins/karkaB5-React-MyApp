import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Welcome from './components/Hello';
import Greet from './components/Greet';
import Grek from './components/Props';
import Grk from './components/PropsTwo';
import Message from './components/State';
import Counter from './components/counter';
import PrevState from './components/PrevState';
import Functionclick from './components/Functionclick';
import Classclickfunction from './components/Classclickfunction';
import EventBind from './EventBind';
import ParentComponent from './ParentComponent';
import IfElse from './IfElse';
import Array from './Array';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Form from './components/Form';
import ContextCompoA from './components/ContextCompoA';
import { UserProvider } from './components/ContextUser';
import HookCounter from './hookscomponents/HookCounter';
import HookCounterTwo from './hookscomponents/HookCounterTwo';
import HookCounterThree from './hookscomponents/HookCounterThree';
import HookCounterFour from './hookscomponents/HookCounterFour';
import HookCounterOne from './hookscomponents/HookCounterOne';
import HookMouseMove from './hookscomponents/HookMouseMove';
import HookDataFetching from './hookscomponents/HookDataFetching';



class App extends Component {
  state = {  }
  render() { 
    return (
      <div className="App">

        <HookDataFetching/>
        {/* <HookMouseMove/> */}
        {/* <HookCounterOne/> */}
        {/* <HookCounterFour/> */}
        {/* <HookCounterThree/> */}
        {/* <HookCounterTwo/> */}
        {/* <HookCounter/> */}
         




        
        {/* <UserProvider value ="Sumesh">
          <ContextCompoA/>
        </UserProvider> */}
        
        {/* <Form/> */}
        {/* <StyleSheet primary ={true}/> */}
        {/* <NameList/> */}
        {/* <Array/> */}
        {/* <IfElse/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <Classclickfunction/> */}
        {/* <Functionclick/> */}
        {/* <PrevState/> */}
        {/* <Counter/> */}
        {/* <Message/> */}
       {/* <Welcome />
       <Greet />
       <Grek name="Sumesh" position="Developer" >
         <p>fghj</p> 
         </Grek>
       <Grek name="Ramesh" position="Founder"> 
        <button>Action</button>
       </Grek>
       <Grek name="Ramji" position="Senior Developer">  </Grek> */}
       {/* <Grk name="Ramji" position="Senior Developer">  </Grk> */}
      </div>
    );
  }
}

 
export default App;
