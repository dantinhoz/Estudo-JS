let nomeInput = document.getElementsByClassName("caixaNome")[0];
let emailInput = document.getElementsByClassName("caixaEmail")[0];

function alerta() {
  if (nomeInput.value.trim() !== "" && emailInput.value.trim() !== "") {
    alert("Mensagem e contato enviados!");
  } else {
    alert("Preencha os dados obrigatórios para enviar!");
  }
}

let botaoMenu = document.getElementsByClassName("botaoMenu");
let iconeLista = document.createElement("img");
iconeLista.src = "/assets/list.svg";
botaoMenu.appendChild(iconeLista);