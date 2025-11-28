import { ChatWidget } from "../features/chat/components/ChatWidget";

export default function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8 bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: 'url("/mock-site.png")',
      }}
    >
      <ChatWidget />
    </div>
  );
}
