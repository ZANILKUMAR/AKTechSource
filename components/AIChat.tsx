import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { createChatSession } from '../services/gemini';
import { ChatMessage } from '../types';
import { GenerateContentResponse } from "@google/genai";

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I can help you learn more about AKTechSource services. Ask me anything!' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getApiKey = () => {
    try {
      return (typeof process !== 'undefined' && process.env?.API_KEY) || '';
    } catch {
      return '';
    }
  };

  useEffect(() => {
    if (isOpen && !chatSessionRef.current && getApiKey()) {
      try {
        chatSessionRef.current = createChatSession();
      } catch (e) {
        console.error("Failed to init chat", e);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (!getApiKey()) {
      setMessages(prev => [...prev, { role: 'user', text: input }, { role: 'model', text: 'AI Chat is currently disabled (Missing API Key). Please contact us via email.', isError: true }]);
      setInput('');
      return;
    }

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const result = await chatSessionRef.current.sendMessageStream({ message: userMsg });
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        const text = c.text || "";
        fullResponse += text;
        
        setMessages(prev => {
          const newHistory = [...prev];
          const lastMsg = newHistory[newHistory.length - 1];
          if (lastMsg.role === 'model') {
            lastMsg.text = fullResponse;
          }
          return newHistory;
        });
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please try again later.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-cyan-500 hover:bg-cyan-400'
        }`}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? <X className="text-white w-6 h-6" /> : <MessageSquare className="text-white w-6 h-6" />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-40 w-80 md:w-96 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 flex items-center gap-2">
          <Bot className="text-white w-5 h-5" />
          <h3 className="text-white font-semibold">AKTechSource Assistant</h3>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-800/90 backdrop-blur-sm">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                  msg.role === 'user'
                    ? 'bg-cyan-600 text-white rounded-tr-none'
                    : msg.isError 
                      ? 'bg-red-900/50 text-red-200 rounded-tl-none border border-red-800'
                      : 'bg-slate-700 text-slate-200 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-700 rounded-2xl rounded-tl-none px-4 py-2 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                <span className="text-xs text-slate-400">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-slate-700 bg-slate-900 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about our services..."
            className="flex-1 bg-slate-800 text-white text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-slate-700 placeholder-slate-500"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-2 bg-cyan-600 rounded-full text-white hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  );
};