import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const STARTER_QUESTIONS = [
  "What's her strongest project?",
  "Does she have experience with AI/LLM integration?",
  "What's her tech stack?",
  "Is she open to full-time roles?"
];

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Durga's portfolio assistant. Ask me anything about her skills, projects, or experience." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 7000); // Disappear after 7 seconds
    return () => clearTimeout(timer);
  }, []);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e, overrideInput = null) => {
    if (e) e.preventDefault();

    const userMessageContent = overrideInput || input;
    if (!userMessageContent.trim()) return;

    const newUserMessage = { role: 'user', content: userMessageContent };
    const newMessagesContext = [...messages, newUserMessage];

    setMessages(newMessagesContext);
    setInput('');
    setIsLoading(true);

    try {
      // Append an empty assistant message that we will fill via streaming
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessagesContext }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      // Handle streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');

      let done = false;
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value, { stream: true });

        if (chunkValue) {
          setMessages((prev) => {
            const updated = [...prev];
            const lastMsg = updated[updated.length - 1];
            if (lastMsg.role === 'assistant') {
              lastMsg.content += chunkValue;
            }
            return updated;
          });
        }
      }
    } catch (error) {
      console.error('Chat API Error:', error);
      setMessages((prev) => {
        const updated = [...prev];
        const lastMsg = updated[updated.length - 1];
        if (lastMsg.role === 'assistant' && lastMsg.content === '') {
          lastMsg.content = "Something went wrong, try again.";
        } else {
          updated.push({ role: 'assistant', content: "Something went wrong, try again." });
        }
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const constraintsRef = useRef(null);

  return (
    <div ref={constraintsRef} className="fixed inset-0 z-[9999] pointer-events-none p-6 flex flex-col justify-end items-end">
      {isOpen && (
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.2}
          dragMomentum={true}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 40px -5px rgba(220, 59, 46, 0.35), 0 8px 16px -8px rgba(220, 59, 46, 0.3)"
          }}
          whileDrag={{ scale: 1.05, cursor: "grabbing" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden w-[calc(100vw-3rem)] sm:w-[380px] h-[500px] max-h-[calc(100vh-6rem)] flex flex-col mb-4 cursor-grab active:cursor-grabbing pointer-events-auto"
        >
          {/* Header */}
          <div className="bg-[#DC3B2E] text-white p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2 pointer-events-none">
              <Bot size={20} />
              <h3 className="font-semibold">Ask about my experience</h3>
            </div>
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div
            onPointerDown={(e) => e.stopPropagation()}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-950 text-gray-200 cursor-auto"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-[#DC3B2E]/20 flex items-center justify-center shrink-0 border border-[#DC3B2E]/30">
                    <Bot size={16} className="text-[#DC3B2E]" />
                  </div>
                )}
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${msg.role === 'user'
                    ? 'bg-[#DC3B2E] text-white rounded-tr-sm'
                    : 'bg-gray-800 border border-gray-700 rounded-tl-sm'
                  }`}>
                  {msg.content.split('\\n').map((line, i) => (
                    <p key={i} className={i !== 0 ? 'mt-2' : ''}>{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Starter Chips - only show if there's only the greeting message */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {STARTER_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSubmit(null, q)}
                    className="text-xs bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 rounded-full px-3 py-1.5 transition-colors text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-[#DC3B2E]/20 flex items-center justify-center shrink-0 border border-[#DC3B2E]/30">
                  <Bot size={16} className="text-[#DC3B2E]" />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-2xl rounded-tl-sm px-4 py-2 flex items-center">
                  <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gray-900 border-t border-gray-800">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                onPointerDown={(e) => e.stopPropagation()}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-gray-950 border border-gray-800 text-gray-100 rounded-full px-4 py-2 focus:outline-none focus:border-[#DC3B2E] focus:ring-1 focus:ring-[#DC3B2E] transition-all cursor-text"
                disabled={isLoading}
              />
              <button
                onPointerDown={(e) => e.stopPropagation()}
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-[#DC3B2E] hover:bg-red-700 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </motion.div>
      )}

      {/* Prompt Tooltip */}
      <AnimatePresence>
        {!isOpen && showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.4 } }}
            transition={{
              y: { repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 1.5 },
              opacity: { delay: 1.5, duration: 0.4 },
              scale: { delay: 1.5, duration: 0.4, type: "spring" }
            }}
            className="mb-6 mr-1 pointer-events-auto bg-gradient-to-r from-[#DC3B2E] to-red-700 text-white text-sm font-semibold px-5 py-3 rounded-2xl shadow-[0_10px_25px_rgba(220,59,46,0.5)] border border-red-500 relative origin-bottom-right"
          >
            Ask anything about my resume! 👋
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-red-700 border-b border-r border-red-500 rotate-45 rounded-sm"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="relative">
        {!isOpen && (
          <span className="absolute inset-0 bg-[#DC3B2E] rounded-full animate-ping opacity-75"></span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`pointer-events-auto relative z-10 bg-gradient-to-tr from-[#DC3B2E] to-red-600 text-white rounded-full p-4 shadow-[0_0_20px_rgba(220,59,46,0.6)] transition-all duration-300 hover:scale-110 ${isOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}
          aria-label="Toggle chat"
        >
          <MessageCircle size={28} />
        </button>
      </div>
    </div>
  );
}
