import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import "bulma/css/bulma.css"; //Cuando importo una hoja de estilos, no hace falta guardarla en una variable.
import ItemCount from "./components/ItemCount/ItemCount.js";

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemCount initial={1} stock={15} onAdd={ (quantity)=>{console.log("Cantidad agregada de items ", quantity)} }/>
    </div>
    
  );
}

export default App;
