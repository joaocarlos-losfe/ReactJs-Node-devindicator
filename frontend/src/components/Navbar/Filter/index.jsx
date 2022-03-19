import { useFetch } from "../../../hooks/useFetch";
import "./style.css";


export function Filter()
{
    const {data, isLoading} = useFetch("data-resouces/categories");

    return (
        <div className="Filter">
            {isLoading ? (<h3>loading categories...</h3>) : 
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