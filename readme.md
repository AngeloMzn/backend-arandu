Documentação para rodar o sistema  
1° Passo - Crie um arquivo .env na raiz do projeto com base no arquivo .env.example, preenchendo os valores corretamente (como a DATABASE_URL).
2° Passo - No terminal, execute o seguinte comando para instalar as dependências do projeto: 
npm install
3° Passo - Execute os comandos abaixo para aplicar as migrações e preparar o banco de dados:
npx prisma migrate dev
npx prisma generate


## 🔗 Configuração da variável `DATABASE_URL`

A variável `DATABASE_URL` é utilizada para configurar a conexão do sistema com o banco de dados PostgreSQL. Ela deve ser declarada no arquivo `.env` localizado na raiz do projeto.

### 📌 Estrutura da variável
DATABASE_URL="postgresql://<USUARIO>:<SENHA>@<HOST>:<PORTA>/<NOME_DO_BANCO>"

### 🧩 Descrição dos campos

| Campo         | Descrição                                                                 |
|---------------|---------------------------------------------------------------------------|
| `USUARIO`     | Nome do usuário com acesso ao banco (ex: `postgres`)                      |
| `SENHA`       | Senha do usuário                                                          |
| `HOST`        | Endereço do servidor onde o banco está hospedado (ex: `localhost`)        |
| `PORTA`       | Porta do banco de dados (padrão: `5432`)                                  |
| `NOME_DO_BANCO` | Nome do banco utilizado no projeto (ex: `fetec_teste`)                   |

### ⚠️ Atenção

- **Não versionar** o arquivo `.env` contendo credenciais reais.
- Use um arquivo `.env.example` como modelo para compartilhar a estrutura esperada sem expor dados sensíveis.
- Em ambientes de produção, configure a variável diretamente na plataforma de hospedagem (ex: Heroku, Railway, Render, etc).



