import { useRef, useState, useEffect } from "react";
import { Send } from "lucide-react";
import { Card } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { useChat } from "../hooks/useChat";
import { ChatButton } from "./ChatButton";
import { ChatHeader } from "./ChatHeader";
import { MessageBubble } from "./MessageBubble";
import AvatarWIcon from "../../../assets/avatar-white.png?url";

export const ChatWidget = () => {
  const { messages, sendMessage, isTyping } = useChat();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const buttonRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // autoscroll para última mensagem
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Foco no input quando aberto
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isOpen && buttonRef.current) {
      setTimeout(() => buttonRef.current?.focus(), 100);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  return (
    <>
      <ChatButton isOpen={isOpen} onClick={toggleChat} buttonRef={buttonRef} />

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-title"
          className="fixed bottom-24 right-6 w-96 shadow-2xl rounded-3xl overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col"
          style={{
            backgroundColor: "#FFFFFF",
            height: "min(600px, calc(100vh - 120px))",
            maxHeight: "calc(100vh - 120px)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Card className="h-full flex flex-col border-0 rounded-3xl overflow-hidden">
            <ChatHeader onClose={toggleChat} />

            {/* MENSAGENS */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5"
              style={{
                backgroundColor: "#FAFAFA",
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #F2F2F2 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            >
              <div className="space-y-4">
                {messages.map((msg) => (
                  <MessageBubble
                    key={msg.id}
                    message={msg}
                    onSuggestionClick={handleSuggestionClick}
                  />
                ))}

                {/* CONEXÃO */}
                {isTyping && (
                  <div className="flex justify-start animate-in fade-in duration-300">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center mr-3 shadow-md"
                      style={{
                        background:
                          "linear-gradient(135deg, #FF00FF 0%, #E000E0 100%)",
                        boxShadow: "0 4px 12px rgba(255, 0, 255, 0.3)",
                      }}
                    >
                      <img src={AvatarWIcon} className="w-5 h-5 text-white" />
                    </div>
                    <div
                      className="rounded-2xl rounded-bl-md px-5 py-3 shadow-sm"
                      style={{
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                      }}
                      role="status"
                      aria-live="polite"
                    >
                      <div className="flex gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full animate-bounce"
                          style={{
                            backgroundColor: "#01A998",
                            animationDelay: "0ms",
                          }}
                        ></span>
                        <span
                          className="w-2.5 h-2.5 rounded-full animate-bounce"
                          style={{
                            backgroundColor: "#01A998",
                            animationDelay: "150ms",
                          }}
                        ></span>
                        <span
                          className="w-2.5 h-2.5 rounded-full animate-bounce"
                          style={{
                            backgroundColor: "#01A998",
                            animationDelay: "300ms",
                          }}
                        ></span>
                      </div>
                      <span className="sr-only">Assistente está digitando</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* INPUT */}
            <div
              className="p-4 border-t backdrop-blur-sm"
              style={{
                borderColor: "#D9D9D9",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
              }}
            >
              <div className="flex gap-2 items-end mb-3">
                <div className="flex-1 relative">
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Pergunte qualquer coisa..."
                    className="pr-12 focus:ring-2 focus:ring-[#01A998] border-[#D9D9D9] rounded-xl shadow-sm"
                    style={{
                      backgroundColor: "#FFFFFF",
                      color: "#0D0D0D",
                    }}
                    aria-label="Digite sua mensagem"
                  />
                </div>
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="flex-shrink-0 h-10 px-4 rounded-xl transition-all hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF00FF 0%, #E000E0 100%)",
                    color: "#FFFFFF",
                    boxShadow: "0 4px 12px rgba(255, 0, 255, 0.3)",
                  }}
                  aria-label="Enviar mensagem"
                >
                  <Send className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
              <div
                className="flex items-center justify-center gap-1.5 text-xs"
                style={{ color: "#585859" }}
              >
                <img
                  src={AvatarWIcon}
                  className="w-3 h-3"
                  style={{ color: "#01A998" }}
                  aria-hidden="true"
                />
                <span>Powered by</span>
                <span className="font-bold bg-gradient-to-r from-[#01A998] to-[#03A688] bg-clip-text text-transparent">
                  T2M
                </span>
              </div>
            </div>
          </Card>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-in fade-in duration-300"
          onClick={toggleChat}
          aria-hidden="true"
        />
      )}
    </>
  );
};
