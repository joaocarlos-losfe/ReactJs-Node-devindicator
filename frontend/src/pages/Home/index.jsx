import './style.css';
import { Card } from "../../components/Card";

export function Home()
{
    return(
        <div>
            <h1>Home</h1>
            <h2>cards: </h2>
            <Card title = "1"/>
            <Card title = "2"/>
            <Card title = "3"/>
        </div>
    )
}