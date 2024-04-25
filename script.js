const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('autor').value;
  const genero = document.getElementById('genero').value;
  const estado = document.getElementById('estado').value;
  const nomeDoador = document.getElementById('nomeDoador').value;
  const contatoDoador = document.getElementById('contatoDoador').value;

  // Salvar os dados no localStorage
  const livro = {
    titulo: titulo,
    autor: autor,
    genero: genero,
    estado: estado,
    nomeDoador: nomeDoador,
    contatoDoador: contatoDoador
  };

  // Verificar se já existe algum dado no localStorage
  let livrosCadastrados = JSON.parse(localStorage.getItem('livrosCadastrados')) || [];
  livrosCadastrados.push(livro);

  // Salvar os dados atualizados no localStorage
  localStorage.setItem('livrosCadastrados', JSON.stringify(livrosCadastrados));

  // Exibir mensagem de sucesso
  alert('Livro cadastrado com sucesso!');

  // Limpar o formulário após o cadastro
  formulario.reset();
});