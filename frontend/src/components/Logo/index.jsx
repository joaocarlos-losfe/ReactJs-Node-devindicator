import "./style.css"

import LogoImg from '../../assets/logo.svg'

import { Link } from "react-router-dom";

export function Logo() {
    return (
        <Link to="/">
            <div className='Logo'>
                <img src={LogoImg}/>
                <h1>evindicator</h1>
            </div>
        </Link>
    )
}