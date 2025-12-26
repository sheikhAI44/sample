'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hey! 👋 I'm the Acceleryn AI assistant. I can answer questions about our done-for-you marketing systems for creators. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error('Gemini API key not found. Please set NEXT_PUBLIC_GEMINI_API_KEY in your .env.local file.');
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      
      // System prompt for Acceleryn Agency AI Assistant
      const systemPrompt = `You are the AI assistant for Acceleryn Agency. You help answer questions about our services and guide potential clients.

**About Acceleryn Agency:**
We help creators turn their existing audience into predictable, consistent revenue through a complete, done-for-you marketing system built specifically for the creator economy. Instead of relying on constant content creation or expensive ads, we install a research-backed funnel system that automates your sales and positions you as the premium solution in your niche.

**What We Install For Creators:**
- A complete, high-converting marketing funnel
- A professionally designed landing page that turns viewers into buyers
- A powerful VSL (Video Sales Letter) that sells your offers 24/7
- Content frameworks and CTA scripts that retain your audience and keep messaging on brand
- Digital products fully packaged and ready for delivery

**Our Pricing Model:**
Unlike most agencies who charge $15,000 to $50,000 upfront for custom funnel builds (with no guarantee of results), or high-end consultants charging $25,000+ just for strategy sessions, Acceleryn offers something different:

- NO upfront cost
- We only do a revenue split on NEWLY generated revenue
- You have nothing to lose, only to gain
- Results-based partnership model

**Your Role:**
- Be friendly, helpful, and professional
- Answer questions about our services clearly
- Emphasize the value: done-for-you system, no upfront cost, proven results
- Encourage visitors to book a free audit call to see real examples of funnels we've built
- Keep responses concise but informative
- If asked about specific pricing numbers, explain our revenue-split model
- For technical questions outside our services, politely redirect to booking a call`;

      // Build conversation history, excluding the initial assistant greeting
      // Filter out the first message if it's an assistant message (the initial greeting)
      const conversationMessages = messages.length > 0 && messages[0].role === 'assistant'
        ? messages.slice(1)
        : messages;

      // Convert to Gemini format - build full conversation context
      const contents = conversationMessages.map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      // Add the current user message
      contents.push({
        role: 'user',
        parts: [{ text: userMessage }]
      });

      // Get model name from env or use default
      // For Google AI Studio API keys - using Gemini 2.0 Flash
      const modelName = process.env.NEXT_PUBLIC_GEMINI_MODEL || 'gemini-2.0-flash-exp';
      
      const model = genAI.getGenerativeModel({ 
        model: modelName,
        systemInstruction: systemPrompt
      });

      // Use generateContent with full conversation history
      const result = await model.generateContent({
        contents: contents.slice(-20), // Keep last 20 messages for context
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      });
      
      const response = await result.response;
      const text = response.text();
      
      setMessages((prev) => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: error instanceof Error 
            ? `Sorry, I encountered an error: ${error.message}` 
            : 'Sorry, I encountered an error. Please try again.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-light shadow-lg hover:shadow-xl flex items-center justify-center text-white transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: isOpen ? 0 : 1,
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-navy-900"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-96 h-[600px] max-h-[80vh] flex flex-col glass rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent/20 to-accent-light/20 border-b border-white/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Assistant</h3>
                  <p className="text-xs text-gray-400">Powered by Gemini</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-navy-900/50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-accent" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-accent to-accent-light text-white'
                        : 'bg-white/10 text-gray-100 border border-white/10'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  </div>
                  {message.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <User size={16} className="text-accent" />
                    </div>
                  )}
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3 justify-start"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Bot size={16} className="text-accent" />
                  </div>
                  <div className="bg-white/10 text-gray-100 border border-white/10 rounded-2xl px-4 py-2">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-accent rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-accent rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-accent rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-navy-900/50">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-light hover:from-accent-light hover:to-accent disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all duration-200"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

