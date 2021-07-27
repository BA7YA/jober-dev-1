import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import Example from '../Pages/Example';

function App() {
    return (
        <>
            <Router>
                <Route exact path="/">
                    <Example />
                </Route>
            </Router>   
        </>
    )
}

export default App

