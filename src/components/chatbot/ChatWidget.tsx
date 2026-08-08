import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { ChatPanel } from "./ChatPanel";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && <ChatPanel onClose={() => setIsOpen(false)} />}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
        className="w-14 h-14 rounded-full bg-gradient-cta shadow-glow flex items-center justify-center text-accent-foreground hover:opacity-95 transition-opacity"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};
