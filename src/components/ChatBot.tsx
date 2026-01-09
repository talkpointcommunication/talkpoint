import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const PHONE_NUMBER = '(888) 363-0848';

const quickReplies = [
  'View Internet Plans',
  'View TV Plans',
  'Bundle Deals',
  'Call Me Now',
];

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hi! Welcome to TALK POINT SOLUTIONS 👋 How can I help you today?',
    },
  ]);
  const [input, setInput] = useState('');

  const handleQuickReply = (reply: string) => {
    setMessages([...messages, { type: 'user', text: reply }]);
    
    setTimeout(() => {
      let response = '';
      switch (reply) {
        case 'View Internet Plans':
          response = 'Great! Check out our high-speed internet plans starting at $39.99/mo. Would you like to speak with our team?';
          break;
        case 'View TV Plans':
          response = 'We have amazing TV packages with 200+ HD channels starting at $49.99/mo. Call us to learn more!';
          break;
        case 'Bundle Deals':
          response = 'Save up to $30/mo with bundle options! We can help you understand combined Internet + TV packages. Ready to get started?';
          break;
        case 'Call Me Now':
          response = `Perfect! Call us at ${PHONE_NUMBER}. We're available 24/7!`;
          break;
        default:
          response = `Thanks for your message! For immediate assistance, please call us at ${PHONE_NUMBER} or continue browsing our plans.`;
      }
      setMessages((prev) => [...prev, { type: 'bot', text: response }]);
    }, 1000);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');
    
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text: `Thank you for your message! For personalized assistance, please call us at ${PHONE_NUMBER}. Our team is available 24/7 to help you!`,
        },
      ]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-20 sm:bottom-24 left-4 right-4 sm:left-auto sm:right-6 z-50 sm:w-[380px] max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-3rem)] h-[500px] sm:h-[600px] bg-card/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-border overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-4 sm:p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">TALK POINT SOLUTIONS</h3>
                    <p className="text-[10px] sm:text-xs text-white/80">Online Now</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base ${
                      message.type === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-secondary text-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}

              {/* Quick Replies */}
              {messages.length === 1 && (
                <div className="space-y-2 pt-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="w-full text-left px-4 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-sm font-medium transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <Button
                  onClick={handleSend}
                  size="icon"
                  className="rounded-xl"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-accent to-purple-600 text-white shadow-2xl flex items-center justify-center hover:shadow-accent/50 transition-shadow"
      >
        {isOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />}
      </motion.button>
    </>
  );
};
