import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import Generator from './Generator';
import Quotes from './Quotes';
const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/"  exact>
                       <Generator/>
                    </Route>
                    <Route path="/Quotes/:name" component={Quotes}>
                       <Quotes/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routes
