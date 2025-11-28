import React from "react";
import { X } from "lucide-react";
import { Button } from "../../../components/ui/button";
import AvatarIcon from "../../../assets/avatar.png?url";

interface ChatHeaderProps {
  onClose: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => {
  return (
    <div
      className="p-5 flex items-center justify-between relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #01A998 0%, #03A688 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)",
          animation: "shimmer 3s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      <div className="flex items-center gap-3 relative z-10">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center relative group" //shadow-lg
          style={
            {
              // backgroundColor: "#FFFFFF",
              // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            }
          }
        >
          <img
            src={AvatarIcon}
            className="w-9 h-9 transition-transform group-hover:scale-110 group-hover:rotate-12"
            style={{ color: "#01A998" }}
            aria-hidden="true"
          />
        </div>
        <div>
          <h2
            id="chat-title"
            className="text-white font-bold text-xl tracking-tight"
          >
            Markin
          </h2>
          <div className="flex items-center gap-1.5 mt-0.5">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#01FFE0" }}
              aria-hidden="true"
            />
            <span className="text-xs font-medium" style={{ color: "#D9D9D9" }}>
              Online - Sempre pronto para ajudar
            </span>
          </div>
        </div>
      </div>
      <Button
        onClick={onClose}
        variant="ghost"
        size="icon"
        className="hover:bg-white/20 focus:ring-2 focus:ring-white rounded-full transition-all relative z-10"
        aria-label="Fechar chat"
      >
        <X className="w-5 h-5 text-white" aria-hidden="true" />
      </Button>

      <style>{`
        @keyframes shimmer {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};
