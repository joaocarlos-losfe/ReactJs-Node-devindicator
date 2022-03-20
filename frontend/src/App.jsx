import { useState } from "react";
import { CardGroup } from "./components/CardGroup";
import { NavBar } from "./components/Navbar";

function App() {

  const currentPage = ["Sugested", "Search"];
  const [swapPage, setSwapPage] = useState(currentPage[0]);

  return (
    <div className="App">
      <NavBar/>
      <CardGroup/>
    </div>
  )
}

export default App
