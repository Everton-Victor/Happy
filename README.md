# Happy
É uma aplicação web, que tem o objetivo localizar os orfanatos da sua cidade com maior facilidade. 

![Home Page Happy](https://github.com/Everton-Victor/Happy/blob/main/capturaTela_README/homePage.PNG)

## Por quê?
Existem muitas crianças que não recebe visitas nos orfanatos, por conta dá falta de acessibilidade aos mesmos. De modo que, essa plataforma irá aumentar as 
chances de estabelecer um centro de informações sobre os orfanatos, assim aumentará a relação entre os orfanatos e o público que deseja adotar ou fazer uma visita no orfanato.

## Como funciona?
Para localizar o orfanato, primeiro ele deve fazer o cadastro na plataforma caso não tenha. 
Depois o interessado em visitar orfanato consiguirá localizar, por meio das informações fornecidas no cadastro.

## Tecnologias
### Front-End
- HTML5
- CSS3
- JS

### Back-End
- Node

### Banco de dados
- SQL
- SQLite

## Pacotes npm utilizado:
#### iniciar projeto 
- npm init -y

#### Instalar Express
- npm install express

#### Para ligar o server
- node src/server.js

##### Alerta!
Só com essas dependências você vai ter que cancelar e executar toda vez que você modificar uma arquivo.
Para resolver isso, baixe a dependência Nodemon.

#### Instalar Nodemon
- npm install nodemon

##### Configuração do package.json
###### No package.json substitua test -> start
- "test": "echo \"Error: no test specified\" && exit 1"

##### Apague o valor de start e coloque
- "start": "nodemon src/server.js"

##### Agora no terminal execute
- npm start

Depois disso ele vai escutar qualquer alteração automaticamente

#### Depois podemos instalar a dependência hbs(handlebars), é uma template enginee.
- npm install hbs

## Referência
#### Essa aplicação está sendo desenvolvida com base na semana NLW #3 ( Next Level Week #3) da Rocketseat, os creditos pertence a esse time incrível!
#### Saiba mais: 
- https://rocketseat.com.br/
- https://github.com/Rocketseat

