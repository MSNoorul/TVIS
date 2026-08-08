import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { X, RotateCcw, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getFaqEntry, starterQuestionIds, type FaqEntry } from "@/data/faq";

interface ChatPanelProps {
  onClose: () => void;
}

export const ChatPanel = ({ onClose }: ChatPanelProps) => {
  const [answeredLog, setAnsweredLog] = useState<FaqEntry[]>([]);
  const [activeOptionIds, setActiveOptionIds] = useState<string[]>(starterQuestionIds);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [answeredLog, activeOptionIds]);

  const handleSelect = (entry: FaqEntry) => {
    setAnsweredLog((prev) => [...prev, entry]);
    setActiveOptionIds(entry.relatedIds);
  };

  const handleBackToTopics = () => {
    setActiveOptionIds(starterQuestionIds);
  };

  const activeOptions = activeOptionIds
    .map((id) => getFaqEntry(id))
    .filter((entry): entry is FaqEntry => Boolean(entry));

  return (
    <div className="flex flex-col w-[min(380px,calc(100vw-2rem))] h-[min(560px,70vh)] rounded-2xl border border-border bg-card shadow-elegant overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-3.5 bg-gradient-brand text-primary-foreground">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-primary-foreground/15 flex items-center justify-center">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="font-display font-bold text-sm leading-tight">TVIS Assistant</div>
            <div className="text-[11px] text-primary-foreground/75 leading-tight">Ask about our products & services</div>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary-foreground/15 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto thin-scrollbar px-4 py-4 space-y-4 bg-gradient-soft">
        <ChatBubble from="bot">
          Hi! I'm the TVIS assistant. Pick a topic below to get started.
        </ChatBubble>

        {answeredLog.map((entry, i) => (
          <div key={`${entry.id}-${i}`} className="space-y-3">
            <ChatBubble from="user">{entry.question}</ChatBubble>
            <ChatBubble from="bot">
              {entry.answer}
              {entry.cta && (
                <Button asChild size="sm" className="mt-3 bg-gradient-cta text-accent-foreground hover:opacity-95">
                  <Link to={entry.cta.href} onClick={onClose}>
                    {entry.cta.label}
                  </Link>
                </Button>
              )}
            </ChatBubble>
          </div>
        ))}

        <div ref={endRef} />
      </div>

      <div className="border-t border-border bg-card px-4 py-3.5 space-y-2">
        <div className="flex flex-wrap gap-2">
          {activeOptions.map((entry) => (
            <button
              key={entry.id}
              type="button"
              onClick={() => handleSelect(entry)}
              className="text-xs font-medium rounded-full border border-primary/25 text-primary px-3.5 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {entry.question}
            </button>
          ))}
        </div>
        {answeredLog.length > 0 && (
          <button
            type="button"
            onClick={handleBackToTopics}
            className={cn(
              "inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-accent transition-colors",
            )}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Back to main topics
          </button>
        )}
      </div>
    </div>
  );
};

const ChatBubble = ({ from, children }: { from: "bot" | "user"; children: React.ReactNode }) => (
  <div className={cn("flex", from === "user" ? "justify-end" : "justify-start")}>
    <div
      className={cn(
        "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
        from === "user"
          ? "bg-primary text-primary-foreground rounded-br-sm"
          : "bg-card border border-border text-foreground rounded-bl-sm shadow-card-soft",
      )}
    >
      {children}
    </div>
  </div>
);
