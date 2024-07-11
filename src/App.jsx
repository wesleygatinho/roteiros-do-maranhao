import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageInicial from "./Paginas/PageInicial";
import PageRoteiros from "./Paginas/PageRoteiros";
import PageDestino from "./Paginas/PageDestino";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageInicial/>}></Route>
        <Route path="/roteiros" element={<PageRoteiros/>}></Route>
        <Route path="/destinos/:id" element={<PageDestino/>}></Route>
      </Routes>
    </BrowserRouter>
      
  )
}

export default App;
