import Pantalla from './Pantalla'
function Boton() {
    const accion =() => {
        let boton = document.querySelector('.aros');
        let contenido = document.getElementById('contenido');
        let carcasaInf = document.querySelector('.Inf');
        let circuloInf = document.querySelector('.circuloInf');
        boton.style.display = 'none';
        contenido.style.display = 'block'
        carcasaInf.style.marginTop= '150px'
        circuloInf.style.marginTop = '200px'
        circuloInf.style.position = 'adsolute'
    }
    return(
    <div className='pantalla'>
        <div id="botones">
            <div className='circuloSup'></div>
            <div className='aros aroPadre'><div className='aros aroHijo'><button onClick={accion}>Iniciar</button></div></div>
            <div className='circuloInf'></div>
        </div>
        <Pantalla/>
    </div>
    )
}
export default Boton