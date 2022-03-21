import './style.css';

import React from "react";
import { Link } from 'react-router-dom';

import { FaRegUser } from "react-icons/fa";
                                   
export function NavLinks()
{
    return (
        <div className='NavLinks'>
            <ul>
                <Link className='linkNav' to="indicate">indicar</Link>
                <Link className='linkNav' to="contact">Contato</Link> 
                <Link className='linkNav' to="about">Sobre</Link> 
                <button>
                    <FaRegUser id='user_icon'/>
                </button>
            </ul>
        </div>
    )
}