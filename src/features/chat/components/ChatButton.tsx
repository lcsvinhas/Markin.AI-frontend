import { MessageCircle, X } from "lucide-react";
import React from "react";
import AvatarWIcon from "../../../assets/avatar-white.png?url";

export const ChatButton: React.FC<{
  isOpen: boolean;
  onClick: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
}> = ({ isOpen, onClick, buttonRef }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className="absolute inset-0 rounded-full animate-ping opacity-20"
        style={{ backgroundColor: "#FF00FF" }}
        aria-hidden="true"
      />
      <button
        ref={buttonRef}
        onClick={onClick}
        className="relative w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-offset-2 group"
        style={{
          background: "linear-gradient(135deg, #FF00FF 0%, #E000E0 100%)",
          boxShadow: "0 8px 32px rgba(255, 0, 255, 0.3)",
        }}
        aria-label={isOpen ? "Fechar assistente" : "Abrir assistente"}
        aria-expanded={isOpen}
      >
        <div className="relative transition-transform duration-300 group-hover:rotate-12">
          {isOpen ? (
            <X className="w-8 h-8 mx-auto text-white" aria-hidden="true" />
          ) : (
            <img
              src={AvatarWIcon}
              alt="Ícone"
              className="w-8 h-8 mx-auto"
              aria-hidden="true"
            />
          )}
        </div>
        <div
          className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white animate-pulse"
          style={{ backgroundColor: "#01A998" }}
          aria-hidden="true"
        />
      </button>
    </div>
  );
};
