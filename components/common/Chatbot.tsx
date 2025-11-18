
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage } from '../../types';
import { GEMINI_MODEL_FLASH_LITE } from '../../constants';
import Button from './Button';
import { getFriendlyErrorMessage } from '../../services/errorService';

const BotAvatar = () => (
    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 3.5a1.5 1.5 0 011.5 1.5v.585a3.501 3.501 0 015.415 2.136A3.5 3.5 0 0115.5 13H14a1 1 0 01-1-1v-1a3.5 3.5 0 01-6.494-1.408A3.5 3.5 0 0110 3.5z"/>
            <path d="M4 11a1 1 0 011 1v1a1 1 0 01-1 1H3.5a3.5 3.5 0 01-2.136-5.415A3.5 3.5 0 015.585 6H6a1.5 1.5 0 011.5 1.5v3a1 1 0 01-1 1H6a1 1 0 01-1-1v-1H4z"/>
        </svg>
    </div>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKey] = useState<string | null>(process.env.API_KEY || null);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatRef.current && apiKey) {
      const ai = new GoogleGenAI({ apiKey });
      chatRef.current = ai.chats.create({
        model: GEMINI_MODEL_FLASH_LITE,
        config: {
            systemInstruction: "You are KaziraBot, a friendly and helpful AI assistant for the Kazira.io platform. Keep your answers concise and helpful.",
        }
      });
      setMessages([{ role: 'model', text: 'Hello! How can I help you today?' }]);
    }
  }, [isOpen, apiKey]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatRef.current) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
        const stream = await chatRef.current.sendMessageStream({ message: input });
        
        let modelResponse = '';
        setMessages(prev => [...prev, { role: 'model', text: '...' }]);

        for await (const chunk of stream) {
            modelResponse += chunk.text;
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].text = modelResponse;
                return newMessages;
            });
        }
    } catch (err) {
        console.error("Chat error:", err);
        const friendlyError = getFriendlyErrorMessage(err);
        setError(friendlyError);
        setMessages(prev => {
            const lastMessage = prev[prev.length - 1];
            // If the last message is our streaming placeholder, update it with the error.
            if (lastMessage && lastMessage.role === 'model' && lastMessage.text === '...') {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].text = `Oops! ${friendlyError}`;
                return newMessages;
            }
            // Otherwise, add a new error message.
            return [...prev, { role: 'model', text: `Oops! ${friendlyError}` }];
        });
    } finally {
        setIsLoading(false);
    }
  };

  if (!apiKey) {
    return null; // Don't render the chatbot if no API key is available
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          aria-label="Toggle Chatbot"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="fixed bottom-24 right-6 w-full max-w-sm h-[70vh] bg-white rounded-xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200"
          >
            <header className="bg-black text-white p-4 flex justify-between items-center flex-shrink-0">
              <h3 className="font-bold text-lg">KaziraBot Assistant</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white" aria-label="Close chat">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </header>

            <main className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-end ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                   {msg.role === 'model' && <BotAvatar />}
                  <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === 'user' ? 'bg-black text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
               {isLoading && messages[messages.length - 1].role === 'user' && (
                <div className="flex justify-start items-end">
                    <BotAvatar />
                    <div className="max-w-[80%] p-3 rounded-2xl bg-gray-200 text-gray-800 rounded-bl-none">
                        <div className="flex items-center space-x-2">
                            <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                            <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                            <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></div>
                        </div>
                    </div>
                </div>
              )}
              {error && <p className="text-xs text-red-500 text-center">{error}</p>}
              <div ref={messagesEndRef} />
            </main>

            <footer className="p-4 border-t border-gray-200 bg-white flex-shrink-0">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-gray-500 focus:border-gray-500"
                  disabled={isLoading}
                />
                <Button variant="primary" type="submit" disabled={isLoading || !input.trim()} className="rounded-full !px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                </Button>
              </form>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;