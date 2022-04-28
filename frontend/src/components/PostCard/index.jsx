import "./style.css"

import {AiOutlineLink, AiOutlineDelete} from "react-icons/ai"
import {FaRegEdit} from "react-icons/fa"
import {MdOutlineModeEditOutline} from "react-icons/md"

export const PostCard = ({category, datetime, userName, originalAuthor, title, descriptionText, sourceUrl, _id, displayAction, handleDeletePost})=>{
    
    const deletePost = () => {
        handleDeletePost({_id})
    }
    
    return (
        <div key={_id} className="PostCard">
            <div className="Top">
                <h3>{category}</h3>
                <div>
                    <h3>{datetime}</h3>
                    <h2><span>{userName}</span></h2>
                </div>
            </div>

            <div className="TitleArea" >
                <h1>{title}</h1>
                
            </div>

            <p>{descriptionText}</p>

            <div className="CardActions">

                <a id={_id} href={sourceUrl} target="_blank">
                    <AiOutlineLink id="linkIcon"/>
                </a>

                <div style={ !displayAction? {display: "none"} : {}} >
                    <button type="button">
                        <MdOutlineModeEditOutline id="linkIcon"/>
                    </button>

                    <button type="button" onClick={deletePost} >
                        <AiOutlineDelete id="linkIcon"/>
                    </button>
                </div>

                
            </div>

        </div>
    )
}