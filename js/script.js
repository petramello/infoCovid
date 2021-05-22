var botaoEnviar = document.getElementById("botao-enviar");

botaoEnviar.addEventListener("click", validaFormulario)

function validaFormulario()
{
  var nome = document.getElementById("nome").value;

  var email = document.getElementById("email").value;

  var telefone = document.getElementById("telefone").value;

  if (nome != "" && email != "" && telefone != "")
  {
    alert("Prontinho, " + nome + "! Você receberá as novidades por email.")
  }
  else
  {
    alert("Por favor, " + nome + ", preencha os campos nome, telefone e email!")
  }
}