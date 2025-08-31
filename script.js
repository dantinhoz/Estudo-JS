// DEFINIÇÃO DE VARIAVEIS
let nomeInput = document.getElementsByClassName("caixaNome")[0];
let emailInput = document.getElementsByClassName("caixaEmail")[0];
let svgMenu = document.getElementsByClassName("svgMenu")[0];

// FUNÇÃO PARA O CHECAR SE O FORMULÁRIO ESTÁ PREENCHIDO E ALERTAR O ENVIO
function alerta() {
  if (nomeInput.value.trim() !== "" && emailInput.value.trim() !== "") {
    alert("Mensagem e contato enviados!");
  } else {
    alert("Preencha os dados obrigatórios para enviar!");
  }
}

// FUNÇÃO DO MENU
function abrirMenu() {
  document.querySelector(".botaoMenu").style.display = "none";
  document.querySelector(".fecharMenu").style.display = "block";
  document.getElementsByClassName("overlayMenu")[0].style.width = "25%";
}

function fecharMenu() {
  document.getElementsByClassName("overlayMenu")[0].style.width = "0";
  document.querySelector(".botaoMenu").style.display = "block";
  document.querySelector(".fecharMenu").style.display = "none";
}

//FUNÇÃO DE "CONHEÇA O NOSSO TRABALHO" QUE VAI PARA SERVIÇOS
function irParaServicos() {
  document.getElementById("servicos").scrollIntoView({behavior: "smooth"});
}