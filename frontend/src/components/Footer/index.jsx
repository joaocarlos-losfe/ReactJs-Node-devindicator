import "./style.css"

import {FaGithub, FaLinkedinIn, FaInstagram, FaTwitter, FaGit} from "react-icons/fa"
import LogoImg from "../../assets/logo.svg"
import {Logo} from "../Logo";
export const Footer = () =>{
    return (
        <div className="Footer">
            <footer>
                <div className="FAbout">
                    <div className="Title">
                        <img src={LogoImg}/>
                        <h1>evindicator</h1>
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

                        <li>
                            <div className="IconConteiner">
                            <FaGithub className="SocialIcon"/>
                            </div>
                            Github
                        </li>
                    </ul>
                </div>
            </footer>
            <h3>Devindicator® 2021-{new Date().getFullYear()}</h3>
        </div>
    )
}