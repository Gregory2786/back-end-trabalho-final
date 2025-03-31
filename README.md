# Documentação do Projeto Back-End - Trabalho Final

## Visão Geral
O projeto é um sistema back-end desenvolvido como trabalho final de disciplina por **Gregory Almeida Silva, Emilha de Souza e Gustavo Rodrigues de Oliveira**. Trata-se de uma API REST desenvolvida em **Node.js**, que fornece serviços para o front-end do sistema.

## Estrutura do Projeto

```
BACK...
├── controllers/                  # Controladores da API
│   ├── beberController.js         # Lógica para bebidas
│   ├── comerController.js         # Lógica para comidas
│   ├── pedidosController.js       # Lógica para pedidos
├── models/                        # Modelos de dados
│   ├── Beber.js                   # Modelo de bebidas
│   ├── Comer.js                   # Modelo de comidas
│   ├── Pedido.js                  # Modelo de pedidos
├── routes/                        # Rotas da API
│   ├── beber.js                   # Rotas para bebidas
│   ├── comer.js                   # Rotas para comidas
│   ├── pedido.js                  # Rotas para pedidos
├── .env                           # Variáveis de ambiente
├── .gitignore                     # Arquivos ignorados pelo Git
├── app.js                         # Configuração principal da aplicação
├── db.js                          # Configuração do banco de dados
├── LICENSE                        # Licença MIT
├── package-lock.json              # Versões exatas das dependências
├── package.json                   # Configuração do projeto Node.js
├── README.md                      # Documentação principal
```

## Funcionalidades Principais

### 📌 Módulo de Bebidas (`beber.js`)
- Listagem de bebidas
- Adição de novas bebidas
- Edição e remoção de bebidas

### 🍽️ Módulo de Comidas (`comer.js`)
- Listagem de pratos
- Cadastro de novos pratos
- Atualização e remoção de pratos

### 🛒 Sistema de Pedidos (`pedido.js`)
- Criação de pedidos
- Atualização do status dos pedidos
- Listagem e histórico de pedidos

## Tecnologias Utilizadas

### 🔹 Back-end:
- Node.js
- Express.js
- Banco de Dados (definido no arquivo `db.js`)

### 🔹 Ferramentas:
- **Git/GitHub** para controle de versão
- **Postman** para testes da API
- **Dotenv** para configuração segura de variáveis de ambiente

## 🚀 Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Gregory2786/back-end-trabalho-final.git
   ```

2. **Acesse a pasta do projeto**:
   ```bash
   cd back-end-trabalho-final
   ```

3. **Instale as dependências**:
   ```bash
   npm install
   ```

4. **Configure as variáveis de ambiente**:
   - Crie um arquivo `.env` na raiz do projeto e configure as credenciais do banco de dados

5. **Inicie o servidor**:
   ```bash
   node app.js
   ```

6. **Acesse a API**:
   ```
   http://localhost:3000
   ```

## 🔥 Diferenciais da Implementação

✅ **Estrutura Organizada**: separação entre modelos, controladores e rotas
✅ **Segurança com variáveis de ambiente**
✅ **Facilidade de Manutenção** com modularização do código

## 📜 Licença
O projeto está sob licença **MIT**. Consulte o arquivo `LICENSE` para detalhes.

## 🔮 Possíveis Melhorias Futuras
📌 Implementação de autenticação JWT para maior segurança  
📌 Criação de testes automatizados com Jest  
📌 Implementação de cache para otimização de consultas  

