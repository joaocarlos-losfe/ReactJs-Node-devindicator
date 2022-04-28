import "./style.css"

import LogoImg from '../../assets/logo.svg'

import { Link } from "react-router-dom";

export function Logo() {
    return (
        <div className="Logo">
            <img src={LogoImg}/>
            <Link id="logotext" style={{textDecoration:"none"}} to="/">Devindicator</Link>
        </div>
    )
}