import "./style.css"

import {FaGithub, FaLinkedinIn, FaInstagram, FaTwitter, FaGit} from "react-icons/fa"
import LogoImg from "../../assets/logo.svg"
import {Logo} from "../Logo";
export const Footer = () =>{
    return (
        <div className="Footer">
            <footer>
                <div className="FAbout">
                    <div>
                        <h1 className="Title">Devindicator</h1>
                    </div>
                    <h2>sobre nós</h2>
                    <h2>politicas de provacidade</h2>
                </div>

                <div className="FAutors">
                    <h1 className="Title">Autores</h1>
                    <h2>Bianca</h2>
                    <h2>João Carlos</h2>
                    <h2>Joanny Eva</h2>
                    <h2>Matheus Victor</h2>
                </div>

                <div className="FSocial">
                    <h1 className="Title">Social</h1>
                    <ul>
                        <li>
                            <div className="IconConteiner">
                                <FaTwitter className="SocialIcon"/>
                            </div>
                            Twiter
                        </li>
                        <li>
                            <div className="IconConteiner">
                                <FaInstagram className="SocialIcon"/>
                            </div>
                            Instagram
                        </li>
                        <li>
                            <div className="IconConteiner">
                                <FaLinkedinIn className="SocialIcon"/>
                            </div>
                            Linkedin
                        </li>

                        <a>
                        <li>
                            <div className="IconConteiner">
                            <FaGithub className="SocialIcon"/>
                            </div>
                            Github
                        </li>
                        </a>
                    </ul>
                </div>
            </footer>
            <h3>Devindicator® 2021-{new Date().getFullYear()}</h3>
            <h4 style={{textAlign: "center", marginTop: "10px", fontSize: "0.7rem"}}>Para mais detalhes sobre o projeto, o código fonte está disponivel no github: </h4>
            <h4 style={{textAlign: "center", marginTop: "10px", fontSize: "0.7rem"}}><a href="https://github.com/joaocarlos-losfe/devindicator" target="_blank" style={{textAlign: "center", cursor: "pointer", color: "#fb6b11"}} >https://github.com/joaocarlos-losfe/devindicator</a></h4>
        </div>
    )
}