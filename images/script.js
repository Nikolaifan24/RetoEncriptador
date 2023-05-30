const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"


function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
    
    }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


function encriptar(stringEncriptada) {
    const matrizCodigo = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"],
    ];
  
    stringEncriptada = stringEncriptada.toLowerCase();
  
    for (const [letraOriginal, letraNueva] of matrizCodigo) {
      if (stringEncriptada.includes(letraOriginal)) {
        stringEncriptada = stringEncriptada.replace(letraOriginal, letraNueva);
      }
    }
  
    return stringEncriptada;
  }
  



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}


function desencriptar(stringDesencriptada) {
    const matrizCodigo = [
      ["enter", "e"],
      ["imes", "i"],
      ["ai", "a"],
      ["ober", "o"],
      ["ufat", "u"],
    ];
  
    stringDesencriptada = stringDesencriptada.toLowerCase();
  
    for (const [letraOriginal, letraNueva] of matrizCodigo) {
      if (stringDesencriptada.includes(letraNueva)) {
        stringDesencriptada = stringDesencriptada.replace(letraNueva, letraOriginal);
      }
    }
  
    return stringDesencriptada;
  }
  


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}



