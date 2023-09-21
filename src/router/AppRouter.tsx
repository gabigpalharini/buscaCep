import React from "react";

import{
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import App from "../App";
import BuscaCep from "../componentes/BuscaCepForm";
import Cadastro from "../componentes/Cadastro";
import Listagem from "../componentes/Listagem";

const AppRouter = () =>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path= "buscacep" element= {<BuscaCep/>} />
            <Route path= "cadastro" element= {<Cadastro/>} />
            <Route path= "listagem" element= {<Listagem/>} />
            </Routes>
            </BrowserRouter>
    )
}
export default AppRouter;