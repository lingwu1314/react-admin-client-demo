import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {BrowserRouter,Route,Switch} from "react-router-dom";
import {WrapperLogin} from './pages/login/login'
import Admin from './pages/admin/admin'

function App() {
  return (
    <BrowserRouter>{/**值匹配一次
     */}
      <Switch>
      <Route path='/login' component={WrapperLogin}></Route>
      <Route path='/admin' component={Admin}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
