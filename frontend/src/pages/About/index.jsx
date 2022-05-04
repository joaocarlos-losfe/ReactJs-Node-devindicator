import "./style.css"

import LogoImg from "../../assets/logo.svg"

export const About = () => {
    return (
        <div className="About">
            <div className="Logo">
                <img src={LogoImg}/>
                <h1>Devindicator</h1>
            </div>

            <p>
                De acordo com o Search Engine Watch em 2003 já existiam mais de dois bilhões de sites na Internet, mas
                menos da quarta parte deles estaria coberta pelos portais de busca, esses dados só ressaltam o grande
                fenômeno de explosão de informações nos dias atuais. Nos nossos primeiros dias como estudantes de
                tecnologia também somos inundados por várias informações novas gerando uma sobrecarga informativa,
                que nos deixa sem saber quais materiais de estudo buscar ou como e por onde começar. É necessário
                discernimento e tempo para escolhas de materiais úteis, confiáveis e de qualidade.
            </p>
            <br/>
            <p>
                O <span>DevIndicator</span> foi pensado para situar a busca de informações através de ferramentas que unem e
                promovem a indicação de sites, livros, vídeos, artigos, projetos e dicas com o olhar voltado para programadores
                ou estudantes e profissionais da área de tecnologia. Essas ferramentas seriam responsáveis por classificar e
                catalogar diversos conteúdos em listas que seriam incrementadas diariamente, o que facilitaria ao usuário o
                encontro de materiais e novas ideias para o auxiliar.
            </p>
        </div>
    )
}