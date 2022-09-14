let buttom = document.querySelector("#Comprar");

buttom.onclick = function(){
    
    let valor1 = 129000;
    let valor2 = 113000;
    let valor3 = 101000;
    let iva = 0.16;
    let total = 0;
    let ValorIva= 0;
    let ValorNeto = 0;
    let select1 = document.querySelector("#Opcion1");
    let select2 = document.querySelector("#Opcion2");
    let select3 = document.querySelector("#Opcion3");

    total = (valor1 * parseInt(select1.value)) + (valor2 * parseInt(select2.value)) 
    + (valor3 * parseInt(select3.value));

    ValorIva = ((valor1 * select1.value)* iva) + ((valor2 * select2.value) * iva) + ((valor3 * select3.value)* iva);

    ValorNeto = total + ValorIva;

    document.querySelector
    ("#total").innerHTML = total;

    document.querySelector
    ("#iva").innerHTML = ValorIva;

    document.querySelector
    ("#Neto").innerHTML = ValorNeto;
}


