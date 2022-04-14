#  🐍 Pycemaker - Repositório do Formulário para o cliente 

A aplicaçao front-end foi criada com o objetivo de ser monitorada pelo sistema Pycemaker. O formulário contém os campos "Nome", "Email", "Telefone" e "Senha", sendo todos os campos obrigátorios. 

# 📦 Repositórios integrantes do projeto

| Repositório                                                                                   | Descrição                   |
| --------------------------------------------------------------------------------------------- | --------------------------- |
| [pycemaker-docs](https://github.com/pycemaker/pycemaker-docs)                                 | Apresentação e documentação |
| [pycemaker-dashboard-client](https://github.com/pycemaker/pycemaker-dashboard-client)         | Front-End Dashboard         |
| [pycemaker-dashboard-api](https://github.com/pycemaker/pycemaker-dashboard-api)               | API para Dashboard          |
| [pycemaker-ETL-Flow](https://github.com/pycemaker/pycemaker-etl-flow)                         | Pycemaker ETL Flow          |
| [pycemaker-form-client](https://github.com/pycemaker/pycemaker-form-client)                   | Front-End para Formulário   |
| [pycemaker-form-server](https://github.com/pycemaker/pycemaker-form-server)                   | Api para Formuário          |


# ⚙️ Instruções de Instalação e Uso

<ul>
<li><b>Instalando NodeJS</b></li>
<ul>
<li>Baixe e instale a versão mais recente do NodeJS LTS:</li>
<a href="https://nodejs.org/en/download/">Node Download</a>
</ul>
</ul>

<ul>
<li><b>Instalando VueJS</b></li>
<ul>
<li>Abra o terminal e instale o VueJS via NPM:
<br/>
   
```bash
$ npm install vue
```

</li>
</ul>
</ul>

<ul>
<li><b>Criando o Node Modules</b></li>
<ul>
<li>Abra o terminal vá para o a pasta raíz do projeto e execute o comando:
<br/>
   
```bash
$ npm install
```

</li>
</ul>
</ul>

<ul>
<li><b>Iniciando o servidor Vue</b></li>
<ul>
<li>No pasta raíz do projeto execute o comando para iniciar o vue:
<br/>
   
```bash
$ npm run serve
```

</li>
</ul>
</ul>

# 📂 Estrutura de arquivos
```
│   .gitignore                                              # ignore arquivos e pastas em respositório git
│   babel.config.js                                         # Configuração do Transpilador JavaScript
│   jsconfig.json                                           # Configuração dos Compilador JavaScript 
│   package-lock.json                                       # Módulos e dependências do projetos       
│   package.json                                            # Arquivos das versões das dependências e scrpits do projeto 
│   README.md                                               # documentação descritiva    
│   vue.config.js                                           # Configuração de Inicialização do VueJS
│
├───public
│       favicon.ico                                         # Ícone da página 
│       index.html                                          # Arquivo HTML que será carregado no navegador 
│
└───src
    │   App.vue                                             # Arquivo carregado no HTML
    │   http-common.js                                      # Conexão com API 
    │   main.js                                             # Arquivo principal de carregamento do Vue 
    │   router.js                                           # Definiçôes de Rotas do sistema
    │
    ├───assets
    │       logo.png                                        # Logo do Pycemaker
    │       pylogo.png                                      # Logo do Pycemaker
    │
    ├───components
    │       AddUser.vue                                     # Página do Componente Formulário
    │       HelloWorld.vue                                          
    │       ListUser.vue                                    # Página do Componente de Listagem de usuários   
    │
    └───service
            ApiDataServer.js                                # Classe de serviços GET e POST
```


