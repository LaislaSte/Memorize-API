# Memorize Studio - API

![badge about status](https://img.shields.io/badge/status-on%20progress-blue)
![badge about version](https://img.shields.io/badge/version-1.1-yellow)

> <p>API do Projeto Memorize Studio, baseado no padrão MVC (sem Views), utilizado: TypeScript, Node JS, Jest para testes e como ORM Node: Prisma usando MySQL para banco <br> O projeto Memorize visa ajudar estudantes com défice de aprendizagem a memorizar conteúdos didáticos atraves de posts, com o intuito de viabilizar socialização como uma rede social </p>
> <p>Memorize Studio Project API, based on the MVC pattern (without Views), used: TypeScript, Node JS, Jest for testing and as ORM Node: Prisma using MySQL for database <br> The Memorize project helps students with learning difficulties to memorize didactic content through posts, in order to enable socialization as a social network </p>

<br>

 **Funcionalidade**
 
> * _Adicionar likes ao post é um comando para revisa-lo_
 
> * _Há interação entre usuários por comentarios em posts_
 
> * _Há também interação entre usuários por Chat de conversa_
 
> * _Conta com um Chat integrado com IA para auxiliar em dúvidas didáticas_
 
**Funcionality**

> * _Adding likes to the post is a command to review it_

> * _There is interaction between users by commenting on posts_

> * _There is also interaction between users via Chat_

> * _Has an integrated AI chat to help with didactic doubts_


## Como a API funciona - How the API works
<section>
 
**Estrutura - Structure**
<p> Basicamente existe um CRUD para as seguintes entidades: <br> Basically there is a CRUD for the following entities: <br> User <br> Profile <br> Post <br> Review </p>
<p> As relações entre as entidades estão expressas no esquema do prisma <br> The relation between entities are on the prisma schema </p>
<p> As rotas estão no diretório de rotas no servidor <br> The routes are available on the server directory</p>

**Rode - Run**
  
CLI - `npm run start`

**Teste - Test**
  
CLI - `npm run test`

</section>


## Contrubua para o projeto:

> ```
> tag: descrição
> ```
>
> A **tag** deve ser o tipo de alteração, seguindo a referencia que estará abaixo com checkbox;\
> E a **descrição** deve ser uma mensagem de commit simples, que abranja todas as alterações dentro do PR;

### Que tipo de alteração esta revisão de código introduz? (Tag)

- [ ] `feat` Nova funcionalidade
- [ ] `fix` Correção de um bug
- [ ] `docs` Atualização de documentação
- [ ] `refact` Alteração no código que não é funcionalidade nova nem correção de bug
- [ ] `perf` Melhoria de performance
- [ ] `test` Adição, alteração ou remoção de testes
- [ ] `build` Alteração no processo de build ou em dependencias externas
- [ ] `ci` Alteração de pipeline ou fluxo de publicação
- [ ] `chore` Outras alterações que não modificam arquivos base ou arquivos de teste
- [ ] `revert` Reversão de commits anteriores

**Exemplo**: `fix/where: message`
