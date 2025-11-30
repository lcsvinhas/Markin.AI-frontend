import type { Message } from "../types/chat";
import AvatarWIcon from "../../../assets/avatar-white.png?url";

export const MessageBubble: React.FC<{
  message: Message;
  onSuggestionClick?: (suggestion: string) => void;
}> = ({ message, onSuggestionClick }) => {

  if (!message.text.trim() && !message.suggestions) {
    return null;
  }

  return (
    <div
      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"
        } animate-in fade-in slide-in-from-bottom-2 duration-300`}
    >
      {message.sender === "bot" && (
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md"
          style={{
            background: "linear-gradient(135deg, #FF00FF 0%, #E000E0 100%)",
            boxShadow: "0 4px 12px rgba(255, 0, 255, 0.3)",
          }}
        >
          <img src={AvatarWIcon} className="w-5 h-5 text-white" />
        </div>
      )}

      <div className="flex flex-col max-w-[75%]">
        <div
          className={`rounded-2xl px-4 py-3 shadow-sm ${message.sender === "user" ? "rounded-br-md" : "rounded-bl-md"
            }`}
          style={{
            background:
              message.sender === "user"
                ? "linear-gradient(135deg, #01A998 0%, #03A688 100%)"
                : "#FFFFFF",
            color: message.sender === "user" ? "#FFFFFF" : "#0D0D0D",
          }}
        >
          <p className="text-sm leading-relaxed">{message.text}</p>

          {message.suggestions && (
            <div className="space-y-2 mt-3">
              {message.suggestions.map((suggestion: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => onSuggestionClick?.(suggestion)}
                  className="block w-full text-left text-sm p-3 rounded-xl"
                  style={{ backgroundColor: "#F2F2F2", color: "#585859" }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#01A998" }}
                    />
                    {suggestion}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        <span
          className={`text-xs mt-1.5 ${message.sender === "user" ? "text-right" : "text-left"
            }`}
          style={{ color: "#585859" }}
        >
          {message.timestamp.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
};
