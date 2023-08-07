import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import "bulma/css/bulma.css"; //Cuando importo una hoja de estilos, no hace falta guardarla en una variable.
//import ItemCount from "./components/ItemCount/ItemCount.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemDetailContainer/>
      

    </div>
    
  );
}

export default App;
