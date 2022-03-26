import { Logo } from '../Logo';
import './style.css';


export function Footer() {
    return(
        <footer>
            <div className='OsLinks'>
                
                <div className='Linkss Sobre'>
                    <Logo/>
                    <div className='Barra'></div>
                    <p>Sobre Nós</p>
                    <p>Politicas de privacidade</p>
                </div>

                <div className='Linkss Autores'>
                    <h2>Autores</h2>
                    <div className='Barra'></div>
                    <p>Bianca Sousa</p>
                    <p>João Carlos</p>
                    <p>Joanny Eva</p>
                    <p>Matheus Victor</p>
                </div>
                
                
                <div className='Linkss Redes Sociais'>
                    <h2>Redes Sociais</h2>
                    <div className='Barra'></div>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Linkedin</p>
                </div>

            </div>

            <div className='anos'>
                <p>Devindicator® 2021-2022</p>
            </div>

        </footer>
    ) 
}