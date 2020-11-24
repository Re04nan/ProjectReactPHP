import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Menu from '../Menu';
import Footer from '../Footer';
import Routes from '../routes';

const App = () => {
    return (
        <>
            <Menu/>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
            <Footer/>
        </>
    );  
}

export default App;