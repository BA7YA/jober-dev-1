import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import Header from '../Main components/Header/View/Header';
import Home from '../Pages/Home/View/Home';
import './App.scss';

function App() {
    return (
        <>
            
                <Router>
                    <div className="header-block">
                        <Header />
                        </div>
                    <div className="body-block">
                    <Route exact path="/">
                        <Home />
                    </Route>
                    </div> 
                </Router>
            
        </>
    )
}

export default App

