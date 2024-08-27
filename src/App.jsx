import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./components/Informacion"


function App() {

  return (
    <main>
     <h1 className="text-center mb-2">Primer Proyecto React 😁</h1>
     { /*Invocar los componentes */ }
     <Informacion/>
    </main>
  )
}

export default App
