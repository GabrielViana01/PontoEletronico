// Recuperações de parametros de data/hora do HTML

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

setInterval(atualizaHora, 1000);

diaMesAno.textContent = dataCompleta();
diaSemana.textContent = daySemana();


// Parametros segunda tela -----------------------------------------------------------------------------

const dialogPonto = document.getElementById("dialog-ponto");


// Botões

const btnRegistrarPonto = document.getElementById("btn-registrar-ponto");
btnRegistrarPonto.addEventListener("click", () => {
    dialogPonto.showModal ();
});

const btnDialogFechar = document.getElementById("btn-dialog-fechar");
btnDialogFechar.addEventListener("click", () => {
    dialogPonto.close();
});
// Parametros para Localização.

navigator.geolocation.getCurrentPosition((position) => {
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

    localStorage.setItem("registro", JSON.stringify(Ponto));

    console.log(Ponto);
});



