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
  document.getElementsByClassName("overlayMenu")[0].style.width = "25%";
  document.getElementsByClassName("svgMenu")[0].path = "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708";
}

function fecharMenu() {
  document.getElementsByClassName("overlayMenu")[0].style.width = "0";
}
