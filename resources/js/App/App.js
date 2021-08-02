import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import Header from '../Main components/Header/View/Header';
import SideMenu from '../Main components/SideMenu/View/SideMenu';
import UserSideBlock from '../Main components/UserSideBlock/View/UserSideBlock';
import News from '../Pages/News/View/News';
import './App.scss';

function App() {
    return (
        <>
                <Router>
                    <div className="header-block">
                        <Header />
                    </div>
                    <div className="body-block">
                        <div className="sidebar-container">
                            <UserSideBlock />
                            <SideMenu />
                        </div>
                    <Route exact path="/">
                        <News />
                    </Route>
                    </div> 
                </Router>
        </>
    )
}

export default App

