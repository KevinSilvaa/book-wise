<div align="center">
  <h1>Book Wise 📖</h1>

  ![Book Wise Home](https://github.com/KevinSilvaa/book-wise/assets/143517496/02fb9ebe-6d96-42a6-9859-9fcced6df1eb)
</div>

<h3 align="center">Projeto realizado durante a trilha para especialização em ReactJS da Rocketseat</h3> <br><br>

<div align="center">
  <a href="https://book-wise-kevinsilvaa.vercel.app" target="_blank">Veja o resultado final clicando aqui</a>
</div>

&nbsp;
&nbsp;

# ℹ️ Detalhes do projeto

O **Book Wise** se trata de uma aplicação onde você pode ver a avaliação de determinados livros, e atém mesmo avaliá-los caso você já tenha
lido. O usuário pode visualizar a aplicação sem fazer o login, porém, não poderá avaliar nenhum livro. Para o login na aplicação pode ser
utilizado o Google ou o Github, assim, facilitando o fluxo de autenticação.

<br>

# 📁 Tecnologias utilizadas para construção da aplicação

- `TypeScript`; Utilizado para adicionar uma tipagem estática a aplicação, reduzindo a quantidade de possíveis erros.
- `MySQL`; Utilizado como o banco de dados desta aplicação.
- `Prisma`; Utilizado como ORM da aplicação, facilitando a maneira de comunicação com o banco de dados.
- `Axios`; Utilizado para fazer requisições para *API*.
- `Next.js`: Uma Framework do React utilizada para estruturação das páginas com ainda mais performance e muitas outras vantagens.

  - `Next Auth`; Utilizado para fazer a conexão com o sistema de autenticação do Google dentro da aplicação.
  - `Next Seo`; Utlizado para melhorar a indexação e o posicionamento da aplicação nos navegadores.
  - `Radix UI`; Utilizado para reaproveitar componentes que seguem todas as regras de acessibilidade e podem ser totalmente estilizados.
  - `Stitches`; Utilizado para a estilização das páginas dentro do JavaScript (CSS-in-JS).
  - `React Hook Form`; Utilizado para lidar com formulários dentro da aplicação.
  - `Zod`; Utilizado para validar campos e transformar dados do formulário corretamente.
  - `React Query`; Utilizado para lidar com requsições a *API* com uma melhor integração ao Back-end e mais performance.
  - `Day.js`; Utilizado para fazer a formatação das datas da aplicação
  - `Phosphor Icons`; Utilizado para importar ícones de uma maneira mais simples.

&nbsp;
&nbsp;
&nbsp;

# 🛠️ Como executar o projeto localmente

### Clone o projeto para o local desejado na sua máquina

```bash
$ git clone git@github.com:KevinSilvaa/book-wise.git
```

&nbsp;
&nbsp;
&nbsp;

### 💻 Executando o projeto
### A aplicação esta utilizando MySQL, então será necessário utilizar o Docker ou qualquer outra ferramenta para hospedar o banco de dados.

```bash
# Navegue até o diretório onde o projeto está localizado
$ cd book-wise

# Instale todas as dependências necessárias do projeto
$ npm install

# Renomeie o arquivo ".env.example" para ".env" e insira as variáveis necessárias

# Execute o comando abaixo para criar as migrations do banco de dados
$ npx prisma migrate dev

# Para abrir o banco de dados no navegador execute o comando abaixo (Opcional)
$ npx prisma studio

# Inicie a aplicação
$ npm run dev

# Após todos esses passos, utilize o endereço enviado via terminal dentro do seu navegador para acessar a aplicação. O endereço padrão utilizado no projeto foi:

http://localhost:3000
```

## Feito por:

### Kevin
### Linkedin: www.linkedin.com/in/kevinsilvaa
