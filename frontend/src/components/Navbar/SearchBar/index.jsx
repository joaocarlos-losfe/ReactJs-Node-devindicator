import { Filter } from '../Filter';
import './style.css';



export function SearchBar()
{

    return(
        
        <div className="SearchBar">
            <form>
                <Filter/>
                <input placeholder='Digite para pesquisar' />
            </form>
        </div>
    )
}