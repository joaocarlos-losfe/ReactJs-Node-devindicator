import { Footer } from "./components/Footer"
import { NavBar } from "./components/Navbar"
import { Home } from "./pages/Home"

// a pilha de navegação e variaveis globais ficarão nesse arquivo
// tutorial de navegação aqui: https://reactrouter.com/docs/en/v6/getting-started/tutorial 
// tutorial de context api: https://www.youtube.com/watch?v=H6bCSzxxiNc&list=WL

function App() {

  return (
    <div className="App">

      <NavBar/>
      <Home/>
      <Footer/>
     
    </div>
  )
}

export default App
