<h1>Sistema de Cadastro e Locação de Veículos</h1>

  <h2>Introdução</h2>
  <p>Este projeto é uma aplicação simples desenvolvida em Angular para gerenciar uma locadora de veículos. Ele permite o cadastro de clientes, cadastro de carros e a realização de locações. Durante a locação, o sistema calcula automaticamente o valor total com base na quantidade de dias alugados.</p>
  <p>O projeto utiliza um arquivo JSON para simular um banco de dados.</p>

  <h2>Funcionalidades</h2>
  <ul>
    <li><strong>Cadastro de Clientes</strong>
     <ul>
        <li>ID</li>
        <li>Nome</li>
        <li>Email</li>
      </ul>
    </li>
    <li><strong>Cadastro de Carros</strong>: Gerenciamento dos carros disponíveis para locação, com informações como:
      <ul>
        <li>ID</li>
        <li>Nome</li>
        <li>Marca</li>
        <li>Placa</li>
        <li>Valor da locação por dia</li>
      </ul>
    </li>
    <li><strong>Tela de Locação</strong>:
      <ul>
        <li>Seleção do cliente e do carro.</li>
        <li>Preenchimento da quantidade de dias de locação.</li>
        <li>Cálculo automático do valor total.</li>
        <li>Listagem de locações realizadas, com opções de edição e exclusão.</li>
      </ul>
    </li>
  </ul>

  <h2>Requisitos</h2>
  <ul>
    <li>Node.js instalado em sua máquina.</li>
  </ul>

  <h2>Instruções de Instalação</h2>

  <h3>Instale as dependências:</h3>
  <pre><code>npm install</code></pre>

  <h2>Rodando o Projeto</h2>
  <p>O projeto requer dois terminais para execução: um para o servidor de banco de dados JSON simulado e outro para o servidor Angular.</p>

  <h3>1. Iniciar o Servidor JSON</h3>
  <p>No primeiro terminal, execute:</p>
  <pre><code>npx json-server --watch database/db.json</code></pre>
  <p>Este comando irá rodar o servidor local usando o arquivo <code>database/db.json</code> como base de dados.</p>

  <h3>2. Iniciar o Servidor Angular</h3>
  <p>No segundo terminal, execute:</p>
  <pre><code>npm start</code></pre>
  <p>O comando iniciará o servidor de desenvolvimento Angular. A aplicação estará disponível no navegador no endereço: <a href="http://localhost:4200" target="_blank">http://localhost:4200</a>.</p>

