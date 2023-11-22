import './conversor.css';
import Imagem from './img/dolar.png'
import Conver from './componentes/Conver';

function App() {
  return (
    <div className="App">
      <h1 className='header'> Conversão </h1>
      <p> </p>
      <Conver />
      <img className='imagem' src={Imagem} />
    </div>
  );
}

export default App;