import FirstComponent from './components/firstComponent/FirstComponent';// se importa el componente del archivo FirtComponent.tsx
import AddToCart from './components/addToCart/AddToCart';
import Welcome from './containers/welcome/Welcome';

function App() {
  return (
    <div className="App">
      <div className="alert alert-primary">
        Puesto de Feria
      </div>
      <FirstComponent name="Catty"/> {/* aqui se importa el componente creado en el archivo "FirstComponent.tsx*/}      
      
      <div>
        <Welcome></Welcome>
      </div>
    
      <AddToCart></AddToCart>
    </div>
    
  );
}

export default App;
