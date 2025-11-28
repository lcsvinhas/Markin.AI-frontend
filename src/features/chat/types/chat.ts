export interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
  suggestions?: string[];
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
}
