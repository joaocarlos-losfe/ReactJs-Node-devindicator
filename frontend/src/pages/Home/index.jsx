import './style.css';
import { Card } from "../../components/Card";

export function Home()
{
    return(
        <div>
            <h1>Eu sou o COMPONENTE Home</h1>
            <h2>Aqui vai todos os cards</h2>
            <Card title = "1"/>
            <Card title = "2"/>
            <Card title = "3"/>
        </div>
    )
}