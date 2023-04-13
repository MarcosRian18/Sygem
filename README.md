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
    <li> <p> Docker-Compose </p> </li>

</ul>

<h2>Comando para clonar o projeto</h2>
<blockquote> git clone https://gitlab.labgovcloud/Marcos_Rian/aplicacao-docker.git </blockquote>

<h2>Comando para rodar aplicação</h2>
<blockquote> docker-compose up </blockquote>

<h2>Pré-configuração</h2>
<p>entre no container do back-end usando o comando:</p>
<blockquote>docker exec -it "containerid" /bin/bash</blockquote>

<p>Ao entrar no container execute o comando:</p>
<blockquote>npx knex migrate:latest</blockquote>

<p>Feito a migrate, saia do container através do atalho CTRL + D, após isso, pode continuar com a aplicação e usar o formulário.</p>


<h3> Link para acessar a documentação do Swagger.</h3>
http://localhost:5000/api-docs

<h3> Link para ter acesso a aplicação</h3>
http://localhost:3000

