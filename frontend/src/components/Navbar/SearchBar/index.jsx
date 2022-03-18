import './style.css';

export function SearchBar()
{
    return(
        <div className="SearchBar">
            <form>
                <label>
                    filtro
                    <select className='Filters'>
                        <option>todos</option>
                        <option>artigo</option>
                        <option>livro</option>
                        <option>video</option>
                        <option>site</option>
                    </select>
                </label>

                <input placeholder='Digite para pesquisar' />
            </form>
        </div>
    )
}