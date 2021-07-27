import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import Header from '../Main components/Header/View/Header';
import SideMenu from '../Main components/SideMenu/View/SideMenu';
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
                        <SideMenu />
                    <Route exact path="/">
                        <Home />
                    </Route>
                    </div> 
                </Router>
            
        </>
    )
}

export default App

