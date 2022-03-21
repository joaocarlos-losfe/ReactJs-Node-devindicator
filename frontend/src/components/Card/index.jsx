import './style.css';

import {FaLink} from "react-icons/fa"

export function Card(props) {
    return(
        <div id={props._id} className='Card'>
            <div className='Top'>
                <h3>{props.category}</h3>
                <div className='DateTimeUser'>
                    <h4>{props.post_date}</h4>
                    <div>
                        <span>indicado por</span>
                        <h3>{props.username}</h3>
                    </div>
                </div>
            </div>

            <div className='Content'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>

                <div className='OpenPost'>
                    <a href={props.source_url} target="_blank"><FaLink/></a>
                </div>

            </div>            

        </div>
    ) 
}