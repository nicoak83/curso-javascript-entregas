/* Resolución del desafío propuesto en la clase 03 */
/* Generación de un bucle for */
/* Calculadora del valor de cada cuota a pagar en un saldo a 12 meses con tarjeta de crédito */ 

let precio = parseFloat(prompt ("Ingrese el precio del artículo que desea pagar"));
let tna =  57;
let plazo = 12;
for (let index = 0; index < 12; index++){
    let valorCuota = parseInt ((precio/plazo)+(((precio-((precio/12)*index))*tna)/100));
    let mensaje = `El valor del pago de la cuota ${index+1} es de ${valorCuota} pesos`;
    alert (mensaje);
}

