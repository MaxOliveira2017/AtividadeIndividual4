import React from "react";
import Home from "./paginas/Home";
import Destino from "./paginas/Destino";
import Promocoes from "./paginas/Promocoes";
import Contato from "./paginas/Contato";


function App() {

  const url=window.location.href;
   
  return (
    <div>
      {
        url === 'http://localhost:3000/Home' 
        ? <Home/>
        : url === 'http://localhost:3000/Destino' 
        ? <Destino/>
        : url === 'http://localhost:3000/Promocoes' 
        ? <Promocoes/>
        : url === 'http://localhost:3000/Contato' 
        ? <Contato/>
        : <Home/>
      }
    </div>
  );
    

}

export default App;
