import { useFetch } from "../../../hooks/useFetch";
import { Loading } from "../../Loading";
import "./style.css";

export function Filter()
{
    const {data, isLoading} = useFetch("data-resouces/categories");

    return (
        <div className="Filter">
            {isLoading ? <Loading/> : 
                <label>
                    filtro
                    <select className="Filters">
                        {
                            data.categories.map((item) =>
                            {
                               return <option key={item}>{item}</option>  
                            })
                        }
                    </select>
                </label>
            }
        </div>
    )
}