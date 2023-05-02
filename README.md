# eventifica
Plataforma de eventos acadêmicos. O projeto foi realizado como atividade da disciplina Banco de Dados II

## Rodando o projeto
Primeiro, instale as dependências do projeto. Indicamos que o node 18.12.0 (LTS) seja utilizado. Utilizando npm, tanto na pasta frontend quanto na backend:
```bash 
npm i 
```

Possuindo docker na sua máquina, dentro da pasta backend, suba os containers com: 
```bash 
docker compose up 
```

Com o backend rodando, dentro da pasta frontend, em um terminal separado, inicialize a aplicação com:
```bash
npm start
```
### Troubleshooting
Caso haja algum problema de conexão entre o banco e o backend, tente reiniciar os containers isoladamente, primeiro o banco de dados e depois o app. 
