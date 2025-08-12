let nomeInput = document.getElementsByClassName("caixaNome");
let emailInput = document.getElementsByClassName("caixaEmail");

function alerta() {
  if (nomeInput.length != 0 && emailInput.length != 0) {
    alert("Mensagem e contato enviados!");
  } else {
    alert("Preencha os dados obrigatórios para enviar!");
  }
  console.log(nomeInput, emailInput)
}
