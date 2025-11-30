import { useState } from "react";
import type { ChatState, Message } from "../types/chat";

export const useChat = () => {
  const [state, setState] = useState<ChatState>({
    messages: [
      {
        id: 1,
        sender: "bot",
        text: "Olá! Como posso ajudar você?",
        timestamp: new Date(),
      },
      {
        id: 2,
        sender: "bot",
        text: "Você pode me perguntar sobre:",
        timestamp: new Date(),
        suggestions: [
          "Qual conteúdo do último curso?",
          "Como funciona o onboarding?",
          "Há vagas para o próximo TechDay?",
        ],
      },
    ],
    isTyping: false,
  });

  const sendMessage = async (text: string) => {
    const userMessage: Message = {
      id: state.messages.length + 1,
      sender: "user",
      text,
      timestamp: new Date(),
    };

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isTyping: true,
    }));

    const botMsgId = state.messages.length + 2;

    setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        {
          id: botMsgId,
          sender: "bot",
          text: "",
          timestamp: new Date(),
        },
      ],
    }));

    try {
      const response = await fetch("http://127.0.0.1:8000/perguntar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pergunta: text }),
      });

      const reader = response.body?.getReader();
      if (!reader) throw new Error("Streaming não suportado");

      const decoder = new TextDecoder();
      let accumulated = "";
      let firstChunkArrived = false;

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        accumulated += chunk;

        if (!firstChunkArrived) {
          firstChunkArrived = true;
          setState((prev) => ({ ...prev, isTyping: false }));
        }

        setState((prev) => ({
          ...prev,
          messages: prev.messages.map((m) =>
            m.id === botMsgId ? { ...m, text: accumulated } : m
          ),
        }));
      }

      setState((prev) => ({ ...prev, isTyping: false }));
    } catch (err) {
      console.error(err);
      setState((prev) => ({ ...prev, isTyping: false }));
    }
  };

  return {
    messages: state.messages,
    isTyping: state.isTyping,
    sendMessage,
  };
};
