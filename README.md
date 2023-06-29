# Gerenciador de Emails e Senhas

<p align="center">
  <img src="/public/logo.png" alt="Logo" width="200" height="200">
</p>

Este projeto é um gerenciador de emails e senhas, desenvolvido em JavaScript e utilizando o framework Bootstrap para a interface. Ele permite adicionar, editar, excluir e pesquisar informações de emails e senhas em uma lista.

## Funcionalidades

### :heavy_plus_sign: Função `add()`

A função `add()` é responsável por adicionar um novo email e senha à lista. Se estiver no modo de edição, ela atualiza as informações do email e senha na linha correspondente. Caso contrário, cria uma nova linha na tabela com as informações fornecidas. Se os campos de email e senha estiverem vazios, exibe uma mensagem de erro.

### :heavy_minus_sign: Função `drop()`

A função `drop()` é utilizada para remover uma linha da tabela quando o botão "Deletar" é clicado. Ela encontra a linha correspondente e a remove do DOM.

### :pencil2: Função `edit()`

A função `edit()` é acionada quando o botão "Editar" é clicado em uma linha da tabela. Ela encontra a linha correspondente e preenche os campos de email e senha do formulário modal com os valores existentes na linha. Em seguida, altera o modo para edição e exibe o modal.

### :mag_right: Função `search()`

A função `search()` é responsável por filtrar as linhas da tabela de acordo com o termo de pesquisa digitado no campo de entrada. Ela obtém o termo de pesquisa, converte-o para minúsculas e percorre todas as linhas da tabela. Se o texto do email da linha incluir o termo de pesquisa ou se o termo de pesquisa estiver vazio, a linha é exibida. Caso contrário, a linha é ocultada.

## Como usar

1. Clone o repositório para o seu ambiente local.
2. Abra o arquivo `index.html` em um navegador web.
3. Na página, você verá um campo de pesquisa, uma tabela vazia e um botão "Adicionar".
4. Para adicionar um novo email e senha, clique no botão "Adicionar". Um modal será aberto.
5. Preencha os campos de email e senha e clique em "Salvar". O email e senha serão adicionados à tabela.
6. Para editar um email e senha existente, clique no botão "Editar" na linha correspondente. O modal será aberto com os valores preenchidos.
7. Faça as alterações desejadas e clique em "Salvar". O email e senha serão atualizados na tabela.
8. Para remover um email e senha, clique no botão "Deletar" na linha correspondente. A linha será removida da tabela.
9. Use o campo de pesquisa para filtrar os emails e senhas na tabela. Digite um termo de pesquisa e as linhas serão filtradas de acordo.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
