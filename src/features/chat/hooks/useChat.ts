import { useState } from "react";
import { chatApi } from "../services/chatApi";
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
          "Há alguma taxa gratuita?",
          "Como meus dados estão protegidos?",
          "Posso cancelar minha assinatura?",
          "O que há de novo?",
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

    try {
      const response = await chatApi.sendMessage(text);

      const botMessage: Message = {
        id: state.messages.length + 2,
        sender: "bot",
        text: response,
        timestamp: new Date(),
      };

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        isTyping: false,
      }));
    } catch {
      setState((prev) => ({ ...prev, isTyping: false }));
    }
  };

  return {
    messages: state.messages,
    isTyping: state.isTyping,
    sendMessage,
  };
};
