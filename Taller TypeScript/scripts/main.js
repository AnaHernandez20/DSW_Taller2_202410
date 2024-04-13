import { series } from './data.js';
//Esto solo es para revisar que todo vaya bien
console.log(series);
var seriesTable = document.getElementById("series");
mostrarDatosSeries(series);
mostrarPromedioSeries(series);
function mostrarDatosSeries(misSeries) {
    //tbody es una etiqueta de HTML que se utiliza para agrupar el contenido del cuerpo de una tabla xd
    var tbodySeries = document.createElement("tbody");
    var _loop_1 = function (serie) {
        //Mi fila
        var trElement = document.createElement("tr");
        //Columnas
        trElement.innerHTML = "<td style=\"font-weight: bold\">".concat(serie.id, "</td>\n        <td style=\"color: rgb(36, 129, 211)\">").concat(serie.nombre, "</td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        //Funcion de mostrar el card
        trElement.onclick = function () { mostrarCardSerie(serie); };
        //.appendChild() para insertar un nuevo elemento en el documento HTML.
        tbodySeries.appendChild(trElement);
    };
    //Encierra las filas (<tr>) de la tabla que contienen las celdas (<td>) con los datos
    for (var _i = 0, misSeries_1 = misSeries; _i < misSeries_1.length; _i++) {
        var serie = misSeries_1[_i];
        _loop_1(serie);
    }
    seriesTable.appendChild(tbodySeries);
}
function mostrarPromedioSeries(misSeries) {
    //Mi fila
    var trElement = document.createElement("tr");
    //Mi columna es asi para luego ponerle el colSpan
    var tdElement = document.createElement("td");
    var sumaSeries = 0;
    //Mi funcion de alto orden yey
    series.forEach(function (n) { return sumaSeries += n.temporadas; });
    var promedio = sumaSeries / misSeries.length;
    //Ocupar 4 columnas hace que la tabla no modifique sus anchos y ganamos
    tdElement.colSpan = 4;
    tdElement.textContent = "Seasons average: ".concat(promedio);
    trElement.appendChild(tdElement);
    seriesTable.appendChild(trElement);
}
function mostrarCardSerie(serie) {
    //Hallar  mi card o crear si no estaba xd a
    var cardContainer = document.getElementById('card');
    cardContainer.innerHTML = "\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"./img/".concat(serie.imagenLocal, "\" class=\"card-img-top img-fluid\" alt=\"").concat(serie.nombre, "\">\n        <div class=\"card-body\">\n          <h5 class=\"card-titulo\">").concat(serie.nombre, "</h5>\n          <p class=\"card-descripcion\">").concat(serie.descripcion, "</p>\n          <a class=\"card-website\" href = ").concat(serie.webSite, ">").concat(serie.webSite, "</a>\n        </div>\n      </div>\n    ");
}
