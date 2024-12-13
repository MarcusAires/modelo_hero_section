import React from 'react';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Hero from '../Hero/Hero';


const Navbar = () => {
    return(
        <>
        <nav className='bg-secondary h-24 min-w-full'>
            <Link to={Hero}>Website</Link>
        <ul className='flex justify-center'>
            <li className='primary-btn max-w-max m-2 mt-8 '>
                <Link to={Hero}>Inicio</Link>
            </li>
            <li className='primary-btn max-w-max m-2 mt-8 '>
                <Link to='/produtos'>Produtos</Link>
            </li>
            <li className='primary-btn max-w-max m-2 mt-8 '>
                <Link to='/sobre'>Sobre nós</Link>
            </li>
        </ul>
        </nav>
        </>
    )
}

export default Navbar;