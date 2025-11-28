# Markin.Ai Widget

> Chat widget modular e escalável implementado com React + TypeScript +
> Tailwind CSS

![Markin.Ai
Widget](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript)
![Tailwind
CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)

## Pré-requisitos

- Node.js 218+
- npm ou yarn
- React 18+

## Instalação

```bash
git clone https://github.com/lcsvinhas/Markin.AI-frontend.git
cd Markin.AI-frontend
npm install
npm run dev
```

## Estrutura do Projeto

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

## Funcionalidades Implementadas

### UI

- Button
- Input
- Card

### Chat

- Mensagens
- Quick replies
- Typing indicator
- Scroll automático
- Timestamps

### UX

- Animações
- Hover & focus states
- Botão flutuante

### Acessibilidade

- ARIA labels
- Navegação por teclado
- Suporte a screen readers
