import React from 'react';
import Home from '../src/Home/home';
import Dashboard from '../src/dashboard/dashboard';
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './components/Header/header';
import Menu from './components/LeftMenu/menu'
import Driver from './Driver/deriver'
import Clints from './Clints/clints'
import Report from './Report/Report'
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <div className="container-page">
        <Menu />
      <div className="container-content">
        
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/dashboard' exact component={Dashboard}></Route>
          <Route path='/clints' exact component={Clints}></Route>
          <Route path='/drivers' exact component={Driver}></Route>
          <Route path='/report/:id' exact component={Report}></Route>
        
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
