<h1>Sistema de Gerenciamento Empresarial</h1>

<p>Esta é uma aplicação direcionada para o publico alvo de fabricas ou empresas em longa escala que exige uma demanda muito alta de funcionarios, nas quais necessitam de um sistema para gerenciar quem entra nessa empresa e ver suas informações, tais como em qual setor se encontra e em qual posição está atualmente ou como foi contratado.</p>

<h2> Histórias de usuário: </h2>

<ul>
    <li>
        <p>
           Eu, como administrator de sistema, gostaria de acessar um formulário, preencher o nome do empregado, selecionar seu cargo em uma combo e sua área de atuação e salvar.
        </p>
    </li>
    <li>
        <p>
            Eu, como administrador do sistema, gostaria de pesquisar o nome de um empregado e visualizá-lo em destaque na hierarquia da empresa.
        </p>
    </li>
    <li>
        <p>
            Eu, como administrador do sistema, gostaria de visualizar os empregados de uma área.
        </p>
    </li>
</ul>
<h2>Arquitetura do Diagrama</h2>
<div style="text-align:center;">
  <img src="./diagrams/APP-Diagram.jpg" alt="..." width="800" height="600">
</div>

<p>Na definição da figura acima temos os 3 containers com as respectivas ferramentas.</p>
<h2>Container Front-end</h2>
<ul>
    <li><p>Aplicação Node.js</p></li>
    <li><p>React.js</p></li>
    <li><p>Vis.js</p></li>
</ul>
<h2>Container Back-end</h2>
<ul>
    <li><p>Aplicação Node.js</p></li>
    <li><p>Express.js</p></li>
    <li><p>Swagger.js</p></li>
</ul>
<h2>Container Banco de dados</h2>
<ul>
    <li><p>PostgreSQL</p></li>
</ul>


<h2> Requisitos para rodar a aplicação </h2>
<ul>
    <li> <p> Docker </p> </li>
    <li> <p> Docker Compose </p> </li>
    <li> <p> npm install </p> </li>
</ul>

<h2>Comando para clonar o projeto</h2>
<blockquote> docker-compose up </blockquote>

<h2>Comando para rodar aplicação</h2>
<blockquote> docker-compose up </blockquote>

<h3> Para visualizar a documentação da API Rest (Swagger). Acesse o link :</h3>
http://localhost:3333/api-docs

<h3> Para visualizar a aplicação acesse :</h3>
http://localhost:3000

