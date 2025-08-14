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
function abrirMenu() {}
