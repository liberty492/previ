import logo from './logo.svg';
import ReactDOM from 'react-dom'; 
import './App.css';
import Hookusestate from './components/Hookusestate';
import Hookuseeffect from './components/Hookuseeffect';
import Btrap from './components/Btrap';
import Fsubmit from './components/Fsubmit';
import NavBar from './components/NavBar';
import HooksApi  from './components/HooksApi';
import allegro from './components/allegro';

import {BrowserRouter as Routings ,Route,Redirect,Switch } from 'react-router-dom';//import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <Routings>
    <NavBar/>
         <Switch>
              


               

             
               <Route  path="/hooksapi" component={HooksApi}/>
               <Route  path="/allegro" component={allegro}/>
               
             
         </Switch>
    
   </Routings>

    );
}

export default App;
