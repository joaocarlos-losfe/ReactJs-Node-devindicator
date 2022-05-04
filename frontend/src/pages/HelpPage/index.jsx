import "./style.css";

import LogoImg from "../../assets/logo.svg";


export const HelpPage = () => {

    return (
        <div className="HelpPage">
        {/* <div className="Logo">
            <img src={LogoImg}/>
            <h1>Devindicator</h1>
        </div> */}

        <h2>Ajuda</h2>

        <h3>Qual a função do Devindicator?</h3>
        <p>
            O <span>DevIndicator</span> foi pensado para situar a busca de informações através de ferramentas que unem e
            promovem a indicação de sites, livros, vídeos, artigos, projetos e dicas com o olhar voltado para programadores
            ou estudantes e profissionais da área de tecnologia. Essas ferramentas seriam responsáveis por classificar e
            catalogar diversos conteúdos em listas que seriam incrementadas diariamente, o que facilitaria ao usuário o
            encontro de materiais e novas ideias para o auxiliar.
        </p>

        <h3>Como fazer a indicação do conteúdo?</h3>
        <p>Inicialmente você precisa ter uma conta e fazer o login, depois acesse a pagina de indicacao 
            e preencha as informações solicitadas, depois salve a indicação ao clicar no botao submeter.</p>

        <h3>Como criar uma conta?</h3>
        <p>Informe seu email e crie um nome de usuário e uma senha, 
            na pagina Cadastro disponivel no botão login. </p>

        <h3>Esqueci a senha, como posso recuperar minha conta?</h3>
        <p>Acesse a página de login e clique na opção recuperação de conta, onde
            será solicitado o email cadastrado para o recebimento do email com as intruções
            para redefinir a senha.
        </p>



        </div>
    )
}