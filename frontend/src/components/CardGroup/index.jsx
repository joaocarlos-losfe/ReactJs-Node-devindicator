import { settings } from "../../configs/settings"
import { useFetch } from "../../hooks/useFetch"
import { Card } from "../Card"
import { Loading } from "../Loading"
import "./style.css"

export function CardGroup()
{
    const {data, isLoading} = useFetch("post/")
    
    
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
                </>
            }
        </div>
    )
} 