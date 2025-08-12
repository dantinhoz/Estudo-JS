nomeInput = document.getElementsByClassName("caixaNome");
emailInput = document.getElementsByClassName("caixaEmail");

function alerta() {
  if (nomeInput.length == 0 || emailInput.length == 0) {
    alert("Preencha os dados obrigatórios para enviar!");
  } else {
    alert("Mensagem e contato enviados!");
  }
}
