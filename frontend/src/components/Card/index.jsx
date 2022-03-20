import './style.css';

import {FaExternalLinkAlt} from "react-icons/fa"

export function Card() {
    return(
        <div className='Card'>
            <div className='Top'>
                <h3>Video</h3>
                <div className='DateTimeUser'>
                    <h4>27/02/2022 18:57</h4>
                    <div>
                        <span>indicado por</span>
                        <h3>Matheus Victor</h3>
                    </div>
                </div>
            </div>

            <div className='Content'>
                <h2>Árvores: o começo de tudo</h2>
                <p>
                    Este é o final da minha Trilogia de
                    Estruturas de Dados e Algoritmos e
                    finalmente vou conseguir falar sobre 
                    o mais importante na matéria: 
                    árvores! Vamos de BSTs a AVLs,  
                    passando por Red Black Trees e 
                    muito mais!
                </p>
            </div>

            <div className='LinkArea'>
                <div>
                    <a><FaExternalLinkAlt/></a>
                </div>
            </div>

        </div>
    ) 
}