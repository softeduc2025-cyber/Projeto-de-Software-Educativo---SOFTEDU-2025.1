# 📚 Projeto de Estantes e Guias de Conhecimento  

Este projeto é uma aplicação **frontend** desenvolvida com **Vite + React + TypeScript + TailwindCSS**, sem backend próprio, utilizando **Firebase** para autenticação (Google Auth) e armazenamento de dados.  

O objetivo do sistema é permitir que usuários se cadastrem, acessem **estantes temáticas**, criem e participem de **guias de estudo**, e interajam com conteúdos e atividades relacionados a diferentes áreas do conhecimento.  

---

## 🚀 Tecnologias Utilizadas  

- ⚡ [Vite](https://vitejs.dev/) — Build tool rápido e moderno  
- ⚛️ [React](https://react.dev/) — Biblioteca para construção da interface  
- 📘 [TypeScript](https://www.typescriptlang.org/) — Tipagem estática para maior segurança e escalabilidade  
- 🎨 [TailwindCSS](https://tailwindcss.com/) — Estilização rápida e responsiva  
- 🔥 [Firebase](https://firebase.google.com/?hl=pt-br) — Autenticação (Google SSO), banco de dados e storage  

---

## ✨ Funcionalidades Principais  

### 🔑 Autenticação  
- Login e cadastro via **Google Auth (SSO)**  
- Coleta de dados básicos: nome, e-mail, foto (se disponível)  
- Possibilidade de adicionar informações adicionais (interesses, preferências, escolaridade, etc.)  

### 📂 Estantes  
- Áreas de conhecimento pré-cadastradas (Matemática, Física, Química, Conhecimentos Gerais, etc.)  
- Sugestão de novas áreas pelos usuários  
- Descrição acessível ao passar o mouse sobre as áreas  

### 📘 Guias  
- Criação, edição, exclusão e arquivamento de guias  
- Associação a uma área do conhecimento  
- Cadastro de informações do guia (nome, descrição, nível, tags, escolaridade opcional)  
- Gerenciamento de permissões (OWNER, MODERATOR, CREATOR, PARTICIPANT)  
- Questionários de diagnóstico inicial e atividades interativas  

### 📝 Conteúdo e Atividades  
- Edição de conteúdo com mídia (vídeo, imagem, link, áudio, iframe)  
- Criação de atividades: formulários, múltipla escolha, gabarito, jogos e templates  
- Status do conteúdo: **Draft, Pending, Reviewed, Published, Rejected**  
- Fila de revisão de guias  

---

## 📦 Instalação e Uso  

Clone o repositório:  

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 🔧 Configuração do Firebase
- Crie um projeto no Firebase Console.
- Ative o Authentication com Google Sign-In.
- Configure o Firestore e Storage (caso necessário para o projeto).
- Adicione suas credenciais no arquivo 

```bash
VITE_FIREBASE_API_KEY=xxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxx
VITE_FIREBASE_PROJECT_ID=xxxx
VITE_FIREBASE_STORAGE_BUCKET=xxxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxx
VITE_FIREBASE_APP_ID=xxxx
```

## 🛠️ Ferramentas de Desenvolvimento
- 🎨 Figma — Design da interface
- 🖥️ VSCode — Editor de código
- 🐙 Git & GitHub — Versionamento e colaboração