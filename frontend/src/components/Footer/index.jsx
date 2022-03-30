import { Logo } from '../Logo';
import './style.css';

import { FaInstagramSquare, FaTwitterSquare, FaLinkedinIn } from "react-icons/fa";


export function Footer() {
    return(
        <footer>
            <div className='OsLinks'>
                
                <div className='Linkss Sobre'>
                    
                    <Logo/>
                    
                    <div className='Barra'></div>
                    
                    <div>
                        <p>Sobre Nós</p>
                    </div>
                    
                    <div>
                       <p>Politicas de privacidade</p> 
                    </div>
                    
                </div>

                <div className='Linkss Autores'>

                    <h2>Autores</h2>

                    <div className='Barra'></div>
                    
                    <div className='autores'>
                        <p>Bianca Sousa</p>
                    </div>

                    <div className='autores'>
                        <p>João Carlos</p>
                    </div>

                    <div className='autores'>
                        <p>Joanny Eva</p>
                    </div>

                    <div className='autores'>
                        <p>Matheus Victor</p>
                    </div>
    
                </div>
                
                
                <div className='Linkss Redes Sociais'>

                    <h2>Redes Sociais</h2>
                    
                    <div className='Barra'></div>
                    
                    <div className='social'>
                        <FaInstagramSquare className='social-icon'/>
                        <p>Twitter</p>
                    </div>
                    
                    <div className='social'>
                        <FaTwitterSquare className='social-icon'/>
                        <p>Instagram</p>
                    </div>
                    
                    <div className='social'>
                        <FaLinkedinIn className='social-icon'/>
                        <p>Linkedin</p> 
                    </div>
                   
                </div>

            </div>

            <div className='anos'>
                <p>Devindicator® 2021-2022</p>
            </div>

        </footer>
    ) 
}