import './style.css';

import React from "react";
import { Link } from "react-router-dom" // responsavel pela navegação entre as paginas
                                        //tutorial aqui: https://reactrouter.com/docs/en/v6/getting-started/tutorial

export function Links()
{
    return (
        <div>
            <ul>
                <li><a>link 1</a></li>
                <li><a>link 2</a></li>
                <li><a>link 3</a></li>
                <li><a>link 4</a></li>
            </ul>
        </div>
    )
}