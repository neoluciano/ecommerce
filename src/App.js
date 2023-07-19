import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import "bulma/css/bulma.css"; //Cuando importo una hoja de estilos, no hace falta guardarla en una variable.

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
    
  );
}

export default App;
