document.addEventListener('DOMContentLoaded', function() {
    // Recuperar os dados do localStorage
    const livrosCadastrados = JSON.parse(localStorage.getItem('livrosCadastrados')) || [];

    // Gerar e exibir a tabela de livros
    const tabelaLivros = document.getElementById('tabelaLivros');

    if (livrosCadastrados.length === 0) {
        tabelaLivros.innerHTML = "<p>Nenhum livro cadastrado.</p>";
    } else {
        const tabela = document.createElement('table');
        tabela.classList.add('livros-table');

        const cabecalho = tabela.createTHead();
        const cabecalhoRow = cabecalho.insertRow();
        cabecalhoRow.innerHTML = "<th>Título</th><th>Autor</th><th>Gênero</th><th>Estado</th><th>Nome do Doador</th><th>Contato do Doador</th>";

        const corpo = tabela.createTBody();
        livrosCadastrados.forEach(function(livro) {
            const row = corpo.insertRow();
            row.innerHTML = `<td>${livro.titulo}</td><td>${livro.autor}</td><td>${livro.genero}</td><td>${livro.estado}</td><td>${livro.nomeDoador}</td><td>${livro.contatoDoador}</td>`;
        });

        tabelaLivros.appendChild(tabela);
    }
});
