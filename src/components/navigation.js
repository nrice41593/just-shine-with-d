import React from 'react';
import { Link } from 'react-router-dom';


const navLinks = [

    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Schedule Appointment',
        path: '/schedule'
    }

]

export default function Navigation () {
    return (
    <nav className='site-navigation'>
        <span>Denise Shines</span>
        <ul>
            { navLinks.map((link, index) => (
                <li key={index}>
                    <Link to={link.path}>{link.title}</Link>
                </li>
            ))}
        </ul>
    </nav>)
}