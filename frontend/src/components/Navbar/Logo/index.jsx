import './style.css';

import LogoImg from '../../../assets/logo.svg'

export  function Logo() {
    return (
        <div>
            <h2>Logo</h2>
            <img src={LogoImg}/>
        </div>
    )
}