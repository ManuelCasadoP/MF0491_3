const contador = document.querySelector("#botonContador");

contador.addEventListener("click",aumentaContador);

let sumador = 0;

function aumentaContador(){

    sumador = sumador +1;

    if (sumador>99){
        sumador=0;
    }

    return (
        document.querySelector("#contador").innerHTML = "Has pulsado el botón " + sumador + " veces"
    )
}
