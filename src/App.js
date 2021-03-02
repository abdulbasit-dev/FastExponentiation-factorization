import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import FastExponentiation from './pages/FastExponentiation';
import TrialDivisionAlgorithm from './pages/TrialDivisionAlgorithm';
import FormatMethod from './pages/FormatMethod';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Link to='/' className=' text-5xl mb-3 text-indigo-500'>
            React Web App
          </Link>
          <div className='flex mt-8'>
            <NavLink
              className='App-link mx-4 text-md'
              to='/fast-exponentiation'
            >
              Fast Exponentiation
            </NavLink>
            <NavLink
              className='App-link mx-4 text-md'
              to='/trial-division-algorithm'
            >
              Trial Division Algorithm
            </NavLink>
            <NavLink className='App-link mx-4 text-md' to='/format-method'>
              Format Method
            </NavLink>
          </div>

          <div className='bg-white  w-1/3 my-10 rounded-lg'>
            <Switch>
              <Route path='/fast-exponentiation'>
                <FastExponentiation />
              </Route>
              <Route path='/trial-division-algorithm'>
                <TrialDivisionAlgorithm />
              </Route>
              <Route path='/format-method'>
                <FormatMethod />
              </Route>
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;

// refrence
// https://gist.github.com/krzkaczor/0bdba0ee9555659ae5fe
// https://www.geeksforgeeks.org/trial-division-algorithm-for-prime-factorization/
//https://www.geeksforgeeks.org/fermats-factorization-method/
