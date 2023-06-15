# Sistema LojadeLivros

LojadeLivros é um sistema para gerenciar cadastros de funcionarios,clientes, novos livros e novos pedidos.

Principais requisitos para Módulo do Gerente:

a) O Sistema deverá permitir que o administrador consulte as informaçoes dos fornecedores e cliente e anotação de pedidos. O administrador poderá visualizar as seguintes informaçoes: clientes: Nome, Cpf e Email, Fornecedores:  Nome, CNPJ e Email, dos livros poderá visualizar: Autor e Titulo, e de Pedidos: Nome de cliente, Valor e Data.

b) O Sistema deverá permitir que o Administrador consulte as informações do sitema online. O Administrador poderá visualizar e alterar qualquer tipo de dado que esteja incorreto e também poderá deletar  informações como: Nome, Email de clientes ou CNPJ e Email de fornecedores.

c) O Sistema deverá permitir que o Administrador Cadastre novos cliente, fornecedores, livros e pedidos

d) O Sistema deverá permitir que o Administrador altere ou delete as informações de livros e pedidos sendo: Nome de cliente, Valor e Data.

e) O Sistema deverá permitir que o **Administrador** altere as informações de Livros cadastrados ou delete as informaçoes: Autor, Titulo e Preço. 

f) O sitema permitira adcionar preços na Aba pedidos de acordo com os clientes ja cadastrados da aba clientes  

# Casos de uso
1.

2. Descrição de casos de Uso 
2.1. Consultar informações do cliente 

2.2 Consultar informaçoes dos Fornecedores

2.3 Alterar e deletar informaçoes

Pós condições: A informação irá ficar armazenada no sistema até que seja deletada ou alterada.

# Fluxo principal 

1. O Administrador consulta e cadastra novos clientes
2. O Administrador deleta ou altera os clientes a cadastrados
3. O Admistrador consulta e cadastra novos livros 
4. O Administrador deleta ou altera novos pedidos e livros
5. O Admistrador consulta e cadastra novos Pedidos e Preços
6.  O Administrador deleta ou altera novos pedidos e e preços

# Fluxo de exeção

## Passo4a (Fornecedor)

 O Sistema verifica se o cnpj é valido, o padrão do cnpj deverá ser  XX. XXX. XXX/0001-XX e informa que não é possivel realizar a alteração ou adicionar o fornecedor. 

## Passo4b (Clientes)
 O Sistema verifica se o cpf é valido, o padrão do cnpj deverá ser  XXX. XXX. XXX-XX e informa que não é possivel realizar a
 alteração ou adicionar o cliente.  

 ## Passo4c (pedidos)
  O Sistema verifica valores em pedidos com a solicitação do cliente. e informa que não é possivel realizar a
 alteração ou adicionar o valor. 