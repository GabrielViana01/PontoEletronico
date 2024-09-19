// Recuperações de parametros de data/hora/DiaSemana do HTML

const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg= document.getElementById("hora-min-seg");
const arrayDayWeek = [ "Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];


// Parametros de Hora/Data ---------------------------------------------------------------------------

function dataCompleta () {
    const date = new Date();
    return String(date.getDate()).padStart(2,"0") + "/" + String((date.getMonth() +1)).padStart(2,"0") + "/" + date.getFullYear();
}

// String ().padStart(2"0")

function horaCompleta() {
    const date = new Date();
    return String(date.getHours()).padStart (2,"0") + ":" + String(date.getMinutes()).padStart(2,"0") + ":" + String(date.getSeconds()).padStart(2,"0");
}

function daySemana () {
    const date = new Date ();
    return arrayDayWeek[date.getDay()];
}


function atualizaHora(){
    horaMinSeg.textContent = horaCompleta();
}
atualizaHora();
setInterval(atualizaHora, 1000);

diaMesAno.textContent = dataCompleta();
diaSemana.textContent = daySemana();


// Parametros segunda tela -----------------------------------------------------------------------------

const dialogPonto = document.getElementById("dialog-ponto");


// Botões

const btnRegistrarPonto = document.getElementById("btn-registrar-ponto");
btnRegistrarPonto.addEventListener("click", () => {
    
    let dialogSelect = document.getElementById("select-tipo-ponto");
    let ultimoPonto = localStorage.getItem("tipoUltimoPonto");
    dialogSelect.value = proxPonto[ultimoPonto];

    dialogPonto.showModal ();
});

let proxPonto = {
    "entrada": "intervalo",
    "intervalo": "volta-intervalo",
    "volta-intervalo": "saida",
    "saida": "entrada"
}

const btnDialogFechar = document.getElementById("btn-dialog-fechar");
btnDialogFechar.addEventListener("click", () => {
    dialogPonto.close();
});
// Parametros para Localização.

navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
});



//Parametros de Registro de Ponto



const btnDialogRegistrarPonto = document.getElementById("btn-dialog-registrar-ponto");
btnDialogRegistrarPonto.addEventListener("click", () => {

    let data = dataCompleta ();
    let hora = horaCompleta ();
    let TipoPonto = document.getElementById("select-tipo-ponto").value;

    let Ponto = {
        "data" : data,
        "hora" : hora,
        "tipo" : TipoPonto,
        "id" : 1
    }



    salvarRegistroLocalStorage(Ponto);
    localStorage.setItem("tipoUltimoPonto", TipoPonto);

    console.log(Ponto);
    dialogPonto.close();
});

function salvarRegistroLocalStorage(Ponto) {
localStorage.setItem("registro", JSON.stringify(Ponto));

}


function recuperaPontosLocalStorage(){
    let todosOsPontos = localStorage.getItem("registro");
    
    if(!todosOsPontos) {
        return [];
    }

    return JSON.parse(todosOsPontos);
}

function salvarRegistroLocalStorage(ponto) {
    let pontos = recuperaPontosLocalStorage();

    pontos.push(ponto);

    localStorage.setItem("registro", JSON.stringify(pontos));
}



