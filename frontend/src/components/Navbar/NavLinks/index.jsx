import './style.css';

import React from "react";
import { Link } from "react-router-dom" // responsavel pela navegação entre as paginas
                                        //tutorial aqui: https://reactrouter.com/docs/en/v6/getting-started/tutorial

import { FaRegUser } from "react-icons/fa";
                                   
export function NavLinks()
{
    return (
        <div className='NavLinks'>
            <ul>
                <li><a>indicar</a></li>
                <li><a>contato</a></li>
                <button>
                    <FaRegUser id='user_icon'/>
                </button>
            </ul>
        </div>
    )
}