import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import "bulma/css/bulma.css"; //Cuando importo una hoja de estilos, no hace falta guardarla en una variable.
//import ItemCount from "./components/ItemCount/ItemCount.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>      
      </BrowserRouter>     

    </div>
    
  );
}

export default App;
