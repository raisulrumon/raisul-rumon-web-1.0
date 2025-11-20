import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Trash2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Hi! I'm Raisul's AI assistant. Ask me anything about his work or skills!", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleClearChat = () => {
    setMessages([
      { id: Date.now().toString(), text: "Hi! I'm Raisul's AI assistant. Ask me anything about his work or skills!", sender: 'ai' }
    ]);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(input);

    const aiMsg: Message = { id: (Date.now() + 1).toString(), text: responseText, sender: 'ai' };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Toggle Button Container */}
      {!isOpen && (
        <div className="fixed bottom-8 right-28 z-50 flex items-center animate-fade-in-up">
            {/* Label */}
            <div className="hidden md:flex items-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full shadow-lg mr-4 text-sm font-semibold border border-gray-100 dark:border-gray-700">
                Questions? Ask AI!
            </div>
            
            {/* Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-primary-700 transition-all hover:scale-110"
                aria-label="Chat with AI"
            >
                <MessageSquare size={26} />
            </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50 flex flex-col transition-all animate-fade-in-up" style={{ maxHeight: '500px', height: '60vh' }}>
          
          {/* Header */}
          <div className="bg-primary-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-semibold">Ask AI about Raisul</span>
            </div>
            <div className="flex items-center gap-1">
                <button 
                    onClick={handleClearChat} 
                    className="hover:bg-primary-700 p-1.5 rounded transition-colors"
                    title="Clear Chat"
                >
                    <Trash2 size={18} />
                </button>
                <button 
                    onClick={() => setIsOpen(false)} 
                    className="hover:bg-primary-700 p-1 rounded transition-colors"
                >
                    <X size={20} />
                </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-primary-600 text-white rounded-br-none' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-sm rounded-bl-none border border-gray-100 dark:border-gray-600'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-400 shadow-sm p-3 rounded-2xl rounded-bl-none border border-gray-100 dark:border-gray-600 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s'}}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s'}}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about skills, projects..."
              className="flex-1 bg-gray-100 dark:bg-gray-700 border-none rounded-xl px-4 py-2 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:outline-none placeholder-gray-500 dark:placeholder-gray-400"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-primary-600 text-white p-2 rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default ChatWidget;