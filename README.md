# facil-consulta setup

## Project setup docker
```
npm install
```

## Preparar os arquivos para produção
```
npm run build
```

## Preparar o container
```
docker-compose build
```

## Executar o container
```
docker-compose up -d
```
---
# Desenvolvimento
node version => 14.19.2
vue version => 2.6.14

Havia feito nada com o Vue antes, então realizei leituras da documentação, acompanhei alguns vídeos no youtube e um curso da udemy, para buscar os fundamentos e exemplos, meu conhecimento prévio com a ferramenta React auxiliou com similaridades no funcionamento de ambos, além da curva de aprendizado não ser muito grande. Tentei ser o mais simples e funcional, cumprindo todos os requisitos com a menor quantidade de código e a maior simplicidade possível.

## Componentização
Optei por envolver em componentes da ferramenta toda grande quantidade de funções relacionadas a um objeto da página e fazendo uso de derivações em alguns, como o uso do componente 'CaixaPrincipal' que define três principais pontos na página, sendo um para os títulos, outro para os formularios ou textos e o último para a imagem.

## Estrutura pages/pages_content
Nas páginas escolhi separar os elementos principais na página em si e o item principal (não dinấmico) que deve ser montado em seu interior.

## Estados dos componentes
Para o compartilhamento de estados entre os componentes utilizei uma simples solução de um objeto 'store' para guardar os estados.

## Persistência dos valores
Para os valores inseridos serem persistentes mesmo após fechar ou recarregar a página, foi utilizado o armazenamento local do navegador com um objeto que é serializado em JSON antes do componente principal atualizar, ou seja, na maioria de ações relevantes que necessitem ser salvas. E novamente em seguida quando o componente principal é criado o JSON é transformado em objeto para ser usado pelos componentes e suas funções de validação. Os inputs, que são campos filhos, atualizam seus valores em sua criação os que necessitam dados da api, e em sua montagem os demais componentes.

## Estilização
Não fiz uso da ferramenta sass e scss por não ter tanto domínio das ferramentas, apesar que conheço suas funcionalidades e não julguei necessário seu uso, neste caso trazendo apenas complexidade para o projeto.

## Validação dos campos
Utilizei um módulo chamado vuelidate, que apesar de trazer funções interessantes para a renderização de erros e validação de campos, mostrou-se muito complexa para acessar em componentes irmãos, para que sejam conferidos antes de trocar de página. Então fiz simples verificações executadas no 'BotaoSubmit', que inclusive como requisitado foi compartilhado entre as três primeiras páginas, sendo reusado de forma simples. 
