import error from './images/error.jpg';
const buscarPokemon = () => {
    const buscar = document.querySelector('#pokeNombre');
    let buscarNom = buscar.value;
    buscarNom = buscarNom.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${buscarNom}`;
    fetch(url).then((res) => {
        if (res.status !='200') img(error);
            else return res.json();
        
    }).then((data) => {
        if (data) {
            let imagen = data.sprites.front_default;
            let nombre = data.name;
            let id = data.id;
            let tipo = data.types;
            let especie = data.species.name;
            let habilidad = data.abilities;
            let altura = data.height;
            let peso = data.weight;
            img(imagen);
            nom(nombre, id);
            datos(tipo, especie, habilidad, altura, peso);
        };
    });
};
const img = (url) => {
    const padre = document.getElementById('img')
    const foto = `<img src=${url} alt=pockemon/>`;
    padre.innerHTML = foto;
};
const nom = (nombre, id) => {
    const nom = document.querySelector('label');
    nom.innerHTML = `${nombre} N<sup>o</sup> ${id}`;
}
const datos = (tipo, especie, habilidad, altura, peso) => {
    const tabla = document.querySelector('#datos');
    let tipos = tipo.map(item => item.type.name);
    let  habi = habilidad.map(item => item.ability.name)
    tabla.innerHTML = `<table>
                            <tr>
                                <td>Tipo: ${tipos}</td>
                            </tr>
                            <tr>
                                <td>Especie: ${especie}</td>
                            </tr>
                            <tr>
                                <td>Habilidades: ${habi}</td>
                            </tr>
                            <tr>
                                <td>Altura/${altura} Peso/${peso}</td>
                            </tr>
                        </table>`
}
function Pantalla() {
    return (
        <div className="contenido" id='contenido'>
            <label htmlFor="pokeNombre"></label>
            <br/>
            <input type="text" name="pokeNombre" id="pokeNombre" placeholder="Ingrese un Pokemon o su Numero"/><button onClick={buscarPokemon}>Buscar</button>
            <div className='datos'>
                <div id='img'></div>
                <div id='datos'></div>
            </div>

        </div>
    )

}
export default Pantalla