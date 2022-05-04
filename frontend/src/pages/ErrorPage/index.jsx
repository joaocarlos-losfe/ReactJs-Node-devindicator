import "./style.css"

import logoImg from "../../assets/logo.svg" 

export const ErrorPage = () => 
{
    return(
        <div className="ErrorPage">
            <h1>Error 404</h1>
            <h2>Página ou recurso solicitado não encontrado, Mais assita o video abaixo para se alegrar um pouco :) </h2>
            <iframe width="400" height="225" src="https://www.youtube.com/embed/2Z4m4lnjxkY?controls=0&amp;start=24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}