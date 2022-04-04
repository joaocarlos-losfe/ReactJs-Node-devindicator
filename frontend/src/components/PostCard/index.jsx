import "./style.css"

import {AiOutlineLink} from "react-icons/ai"

export const PostCard = ({category, datetime, userName, originalAuthor, title, descriptionText, sourceUrl, _id})=>{
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

            <div id="OpenContent">
                <a id={_id} href={sourceUrl} target="_blank">
                    <AiOutlineLink id="linkIcon"/>
                </a>
            </div>

        </div>
    )
}