import './style.css';

import LogoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

export function Logo() {
    return (
        <div className='Logo'>
            <Link to="/">
                <img src={LogoImg}/>
                <h1>evindicator</h1>
            </Link>
        </div>
    )
}