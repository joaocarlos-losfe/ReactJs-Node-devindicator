import "./style.css"

export const SimpleMessage = ({title, description})=>{
    return (
        <div className="SimpleMessage">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}