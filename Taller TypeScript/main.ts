//Importo las otras clases
import {Serie} from './serie.js' 
import {series} from './data.js';

//Esto solo es para revisar que todo vaya bien
console.log(series);

let seriesTable: HTMLElement = document.getElementById("series")!;


mostrarDatosSeries(series);
mostrarPromedioSeries(series);

function mostrarDatosSeries(misSeries: Serie[]):void{
    //tbody es una etiqueta de HTML que se utiliza para agrupar el contenido del cuerpo de una tabla xd
    let tbodySeries: HTMLElement = document.createElement("tbody");

    //Encierra las filas (<tr>) de la tabla que contienen las celdas (<td>) con los datos

    for(let serie of misSeries){
        //Mi fila
        let trElement: HTMLElement = document.createElement("tr");


        //Columnas
        trElement.innerHTML = `<td style="font-weight: bold">${serie.id}</td>
        <td style="color: rgb(36, 129, 211)">${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;

        //Funcion de mostrar el card
        trElement.onclick = function() {mostrarCardSerie(serie);};

         //.appendChild() para insertar un nuevo elemento en el documento HTML.
        tbodySeries.appendChild(trElement);
    }

    seriesTable.appendChild(tbodySeries);
}

function mostrarPromedioSeries(misSeries: Serie[]):void{

    //Mi fila
    let trElement: HTMLElement = document.createElement("tr");
    //Mi columna es asi para luego ponerle el colSpan
    let tdElement: HTMLTableCellElement = document.createElement("td");

    let sumaSeries: number = 0;

    //Mi funcion de alto orden yey
    series.forEach(n => sumaSeries+= n.temporadas);

    let promedio: number =sumaSeries/misSeries.length;

    //Ocupar 4 columnas hace que la tabla no modifique sus anchos y ganamos
    tdElement.colSpan = 4;
    tdElement.textContent = `Seasons average: ${promedio}`;

    trElement.appendChild(tdElement);
    seriesTable.appendChild(trElement);

}


function mostrarCardSerie(serie: Serie): void {

    //Hallar  mi card o crear si no estaba xd a
    let cardContainer = document.getElementById('card')!;

    
    cardContainer.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="./img/${serie.imagenLocal}" class="card-img-top img-fluid" alt="${serie.nombre}">
        <div class="card-body">
          <h5 class="card-titulo">${serie.nombre}</h5>
          <p class="card-descripcion">${serie.descripcion}</p>
          <a class="card-website" href = ${serie.webSite}>${serie.webSite}</a>
        </div>
      </div>
    `;
  }