import './style.css';

import LogoImg from '../../../assets/logo.svg'

export function Logo() {
    return (
        <div className='Logo'>
            <a>
                <img src={LogoImg}/>
                <h1>evindicator</h1>
            </a>
        </div>
    )
}