import './App.css';
import Boton from './components/Boton'


function App() {
  return (
    <div className="fondo">
        <div className='carcasa Sup'>
          <div className='supIzq1'><div className='supIzq2'></div></div>
          <div className='supDch1'><div className='supDch2'></div></div>
        </div>
        <Boton/>
        <div className='carcasa Inf'>
          <div className='infIzq1'><div className='infIzq2'></div></div>
          <div className='infDch1'><div className='infDch2'></div></div>
        </div>
    </div>
  );
}

export default App;
