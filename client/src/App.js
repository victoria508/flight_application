
import { useSelector } from 'react-redux';
import React, { Fragment, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import PrivateRoute from './components/routing/PrivateRoute';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from "./components/sidebar/Sidebar"
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';



import './App.css';


const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);


  const flight = useSelector((state) => state.flights);
 console.log("App: "+JSON.stringify(flight));
 
  return (
    <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
        <PrivateRoute exact path="/DynamicForm" component={Sidebar}/>
         <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
  
  );
}



export default App;



