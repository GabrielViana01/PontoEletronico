const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg= document.getElementById("hora-min-seg");
const arrayDayWeek = [ "Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];


// Parametros de Hora/Data ---------------------------------------------------------------------------

function dataCompleta () {
    const date = new Date();
    return date.getDate () + "/" + (date.getMonth() +1) + "/" + date.getFullYear();
}

function horaCompleta() {
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
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
diaSemana.textContent = horaCompleta();


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


