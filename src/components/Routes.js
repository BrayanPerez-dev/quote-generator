import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Error from './Error';
import Generator from './Generator';
import Quotes from './Quotes';
const Routes = () => {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" >
                        <Generator />
                    </Route>
                    <Route path="/Quotes/:name">
                        <Quotes />
                    </Route>
                    <Route path="*">
                        <Error/>
                    </Route>
                </Switch>
            </Router>
    )
}

export default Routes
