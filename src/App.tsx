import Client from './components/client/Client';// se importa el componente del archivo Client.tsx
import Welcome from './containers/welcome/Welcome';

function App() {
  return (
    <div className="App">
      <div className="alert alert-primary">
        Puesto de Feria
      <Client name="Catherine"/> {/* aqui se importa el componente creado en el archivo "FirstComponent.tsx*/}      
      </div>
      
      <div>
        <Welcome></Welcome>
      </div>
    
    </div>
    
  );
}

export default App;
