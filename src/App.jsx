import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageInicial from "./Paginas/PageInicial";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageInicial/>}></Route>
      </Routes>
    </BrowserRouter>
      
  )
}

export default App;
