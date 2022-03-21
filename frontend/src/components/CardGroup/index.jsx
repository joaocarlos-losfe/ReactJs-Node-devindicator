import { settings } from "../../configs/settings"
import { useFetch } from "../../hooks/useFetch"
import { Card } from "../Card"
import { Loading } from "../Loading"
import "./style.css"

import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { useState } from "react"

export function CardGroup()
{
    const {data, isLoading} = useFetch("post/")
    const [swapPageCount, setSwapPageCount] = useState(1)

    console.log(data);

    return(
        <div className="CardGroup">
            {
                isLoading ? <Loading/> :
                <>
                    <h2>Sugeridos</h2>
                    <div className="Cards">
                        {
                            data.posters.map((item) =>
                            {
                                return <Card id={item._id} 
                                        category={item.category}
                                        post_date={item.post_date}
                                        username={item.username}
                                        title={item.title}
                                        description={item.description}
                                        source_url={item.source_url}
                                        />
                            })
                        }
                    </div>
                    
                    <div className="swapPages">
                        <FaChevronLeft className="btn" id="increment" onClick={()=> setSwapPageCount(swapPageCount == 1 ? swapPageCount : swapPageCount - 1)}/>
                        <h3>{`página ${swapPageCount} de ${data.totalpages}`}</h3>
                        <FaChevronRight className="btn" id="decrement" onClick={()=> setSwapPageCount(swapPageCount == data.totalpages ? swapPageCount : swapPageCount + 1)}/>
                    </div>
                    
                </>
            }
        </div>
    )
} 