import "./style.css"

import {AiOutlineLink, AiOutlineDelete} from "react-icons/ai"
import {FaRegEdit} from "react-icons/fa"
import {MdOutlineModeEditOutline} from "react-icons/md"

export const PostCard = ({category, datetime, userName, originalAuthor, title, descriptionText, sourceUrl, _id, displayAction})=>{
    return (
        <div key={_id} className="PostCard">
            <div className="Top">
                <h3>{category}</h3>
                <div>
                    <h3>{datetime}</h3>
                    <h2>indicado por <span>{userName}</span></h2>
                </div>
            </div>

            <div className="TitleArea">
                <h1>{title}</h1>
                <h2 id="autor">fonte original: <span>{originalAuthor}</span></h2>
            </div>

            <p>{descriptionText}</p>

            <div className="CardActions">

                <div style={ !displayAction? {display: "none"} : {}} >
                    <button type="button">
                        <MdOutlineModeEditOutline id="linkIcon"/>
                    </button>

                    <button type="button">
                        <AiOutlineDelete id="linkIcon"/>
                    </button>
                </div>

                <a id={_id} href={sourceUrl} target="_blank">
                    <AiOutlineLink id="linkIcon"/>
                </a>
            </div>

        </div>
    )
}