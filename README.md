# Markin.AI

> Bem-vindo ao repositório técnico do **Markin.AI**, o ecossistema que transforma conhecimento corporativo em uma camada inteligente e consultável, com IA, RAG, governança e alta extensibilidade.

Este repositório serve como portal do projeto: a porta de entrada para desenvolvedores, stakeholders e colaboradores que desejam entender o produto, a arquitetura, a documentação técnica e o roadmap.

📚 **Sumário**

1. [Visão Geral](#visão-geral)
2. [Arquitetura do Produto](#arquitetura-do-produto)
3. [Documentação e Materiais](#documentação-e-materiais)
4. [Front-end (Widget Chat)](#markinai-front-end-widget)
5. [Back-end (API / RAG / Pipelines)](https://github.com/lcsvinhas/Markin.AI-backend)
6. [Equipe](#equipe)
   <br><br>

## Visão Geral

O **Markin.AI** é um chat modular, leve e acoplável a qualquer aplicação web.

Principais objetivos:

- Onboarding mais rápido e consistente
- Redução de dependência de especialistas
- Padronização de decisões técnicas
- PDI automatizado e conectado à prática real
- Documentação viva com visibilidade sobre gaps
- Governança e compliance (PII, logs, permissões)

A solução combina:

- LLMs + RAG
- Classificação pré-indexação
- Redaction de PII
- Logging e auditoria
- Arquitetura híbrida (local + cloud)
- Widget de Chat + Bot Integrado
- Versões SaaS, White-label e On-premise
  <br><br>

## Arquitetura do Produto

```plaintext

                     +---------------------+
                     |      Front-end      |
                     |     (React + TS)    |
                     +----------+----------+
                                |
                                v
           +----------------------------------------+
           |               API Layer                |
           |  Auth, Logging, Auditoria, PII Filter  |
           +------------------+---------------------+
                              |
                              v
                +-------------------------------+
                |  Motor de RAG + Indexação     |
                |  LangChain / LlamaIndex       |
                +--------------+----------------+
                               |
                               v
                +-------------------------------+
                |  Pipelines de Ingestão        |
                |  Normalização, Metadados      |
                |  Classificação, Redaction     |
                +--------------+----------------+
                               |
                               v
                +-------------------------------+
                |  Base de Conhecimento         |
                |  (Embeddings + Metadados)     |
                +-------------------------------+

```

<br><br>

## Documentação e Materiais

Aqui você encontra todos os documentos estratégicos e técnicos do projeto.

📌 Estrutura do Case<br>
👉 [/docs/estrutura-do-case.md](#)

📌 Levantamento Inicial<br>
👉 [/docs/levantamento-inicial.md](#)

📌 Soluções, Mitigações e outros dados para a viabilidade<br>
👉 [/docs/levantamento-inicial.md](#)
<br><br>

## Markin.AI Front-end (Widget)

> Widget de chat modular projetado para ser facilmente integrado em qualquer aplicação web e extensível para diferentes casos de uso.

Tecnologias principais:

- **React 18+**
- **TypeScript 5+**
- **TailwindCSS 3+**
  <br>

Arquitetura baseada em _features_ e componentes reutilizáveis
<br>

### Instalação

```bash
git clone https://github.com/lcsvinhas/Markin.AI-frontend.git
cd Markin.AI-frontend
npm install
npm run dev
```

### Estrutura do Projeto

```bash
src/
├── app/
│   ├── App.tsx
│   └── main.tsx
│
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── card.tsx
│       └── index.ts
│
├── features/
│   └── chat/
│       ├── components/
│       │   ├── ChatButton.tsx
│       │   ├── ChatHeader.tsx
│       │   ├── ChatWidget.tsx
│       │   └── MessageBubble.tsx
│       ├── hooks/
│       │   └── useChat.ts
│       ├── services/
│       │   └── chatApi.ts
│       ├── types/
│       │   └── chat.ts
│       └── index.ts
│
├── lib/
│   └── utils.ts
│
└── styles/
    └── globals.css
```

## Equipe

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/lcsvinhas">
        <img src="https://avatars.githubusercontent.com/u/179336216?v=4" width="100px;" alt="Avatar Lucas Vinhas"/><br>
        <sub><b>Lucas Vinhas</b></sub>
      </a>
      <br><br>
      <a href="https://www.linkedin.com/in/lucas-vinhas-/" target="_blank">
        <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/pckzin01">
        <img src="https://avatars.githubusercontent.com/u/177571525?v=4" width="100px;" alt="Avatar Patrick Paiva"/><br>
        <sub><b>Patrick Paiva</b></sub>
      </a>
      <br><br>
      <a href="https://www.linkedin.com/in/patrick-gon%C3%A7alves-66621b1b9/" target="_blank">
        <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/thaiscardosodemello">
        <img src="https://avatars.githubusercontent.com/u/14929797?v=4" width="100px;" alt="Avatar Thais Cardoso"/><br>
        <sub><b>Thais Cardoso</b></sub>
      </a>
      <br><br>
      <a href="https://www.linkedin.com/in/thais-cardoso-de-mello/" target="_blank">
        <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
      </a>
    </td>
  </tr>
</table>
