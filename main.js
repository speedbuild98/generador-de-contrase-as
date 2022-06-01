
function generar(){
    let longitud = parseInt(inputLength.value);

    let letras = "abcdefghijklmnopqrstuvwxyz";
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = ".?,;-_¡!¿*%&$/()[]{}|@><";

    if (checkbox1.checked) letras += numeros;

    if (checkbox2.checked) letras += simbolos;

    if (checkbox3.checked) letras += mayusculas;

    contraseñaGenerada.innerText = generarContraseña(letras, longitud);
};



const generarContraseña = (letras, longitud) => {
    let contraseña = "";
    for (let x = 0; x < longitud; x++) {
        let random = Math.floor(Math.random() * letras.length);
        contraseña += letras.charAt(random);
    }
    return contraseña;
};

