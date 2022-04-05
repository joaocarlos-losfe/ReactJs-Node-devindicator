import "./style.css"

export const Popup = props => {

    console.log(props.bcolor)

    return (

        <div className="popup-box">
            <div className="box" style={{border: `2px solid ${props.bColor}`}}>
                <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
            </div>
        </div>
    );
};