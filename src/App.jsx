import React from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { Router } from 'react-router-dom';
import{Route,Routes} from 'react-router-dom';

const App = () => {
    return(
        <main className='overflow-x-hidden'>
            <Navbar />
            <Hero/>
        </main>
    );
};

export default App;