import React from 'react';
import classes from './App.module.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './NavBar/NavBar';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import NotExist from './notExist/NotExist404';

function App(props) {
  console.log(props);
  return (
    <div className={classes.app}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path={["/", "/en", "/de"]} component={Main} />
          <Route component={NotExist} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
