
import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User } from 'lucide-react';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const INITIAL_MESSAGE: Message = {
  id: '1',
  text: "Hello! I'm your Community Nutrition Advisor. Tell me what ingredients you have, and I'll suggest a nutritious local recipe!",
  sender: 'bot',
  timestamp: new Date()
};

const RECIPE_KNOWLEDGE_BASE: Record<string, string> = {
  'cassava': "With **Cassava**, you can make a nutritious **Cassava Stew**!\n\n1. Boil cassava chunks until soft.\n2. Sauté onions, tomatoes, and garlic.\n3. Add the cassava and spinach or kale.\n4. Simmer with coconut milk for extra energy!",
  'millet': "**Millet Porridge** is a great breakfast!\n\n1. Mix millet flour with water to form a paste.\n2. Boil water and stir in the paste.\n3. Add milk and a little honey or fruit for vitamins.",
  'spinach': "**Sautéed Spinach** is iron-rich!\n\n1. Wash spinach thoroughly.\n2. Fry onions and tomatoes.\n3. Add spinach and cook for just 3-5 minutes to keep the nutrients.",
  'maize': "**Githeri** is a classic!\n\n1. Boil maize and beans together until soft.\n2. Fry with onions, tomatoes, and potatoes.\n3. Add coriander for flavor.",
  'beans': "Beans are a great protein source! Try **Bean Stew**.\n\n1. Boil beans until tender.\n2. Fry onions, garlic, and bell peppers.\n3. Add beans and simmer. Serve with rice or chapati.",
  'sukuma': "**Sukuma Wiki** is essential!\n\n1. Slice kale thinly.\n2. Sauté onions and tomatoes.\n3. Cook kale briefly to retain crunch and vitamins.",
  'ugali': "**Ugali** pairs with everything!\n\n1. Boil water.\n2. Stir in maize flour gradually until thick.\n3. Serve with green vegetables and protein.",
};

const DEFAULT_RESPONSE = "That sounds interesting! To give you the best advice, could you mention specific ingredients like **Cassava**, **Millet**, **Beans**, **Maize**, or **Spinach**?";

export default function NutritionChatbot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Analyze input mock logic
    const lowerInput = userMsg.text.toLowerCase();
    let responseText = DEFAULT_RESPONSE;

    // Check for keywords
    const foundIngredients = Object.keys(RECIPE_KNOWLEDGE_BASE).filter(key => lowerInput.includes(key));

    if (foundIngredients.length > 0) {
      // Pick the first match for simplicity
      responseText = RECIPE_KNOWLEDGE_BASE[foundIngredients[0]];
    } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      responseText = "Hi there! Ready to cook something healthy? What ingredients do you have today?";
    } else if (lowerInput.includes('thank')) {
      responseText = "You're welcome! Enjoy your healthy meal. 🥗";
    }

    // Simulate network delay
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in">
      <div className="bg-white w-full max-w-md h-[600px] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative">

        {/* Header */}
        <div className="bg-green-600 p-4 flex justify-between items-center text-white shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={24} />
            </div>
            <div>
              <h3 className="font-bold">Nutrition Advisor</h3>
              <p className="text-xs text-green-100">Aligned with Afro-Impact</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                ${msg.sender === 'user' ? 'bg-gray-800 text-white' : 'bg-green-100 text-green-600'}
              `}>
                {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>

              <div className={`
                max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line shadow-sm
                ${msg.sender === 'user'
                  ? 'bg-gray-800 text-white rounded-tr-none'
                  : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'}
              `}>
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3">
               <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                 <Bot size={16} />
               </div>
               <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your ingredients..."
            className="flex-1 px-4 py-3 bg-gray-50 rounded-xl focus:ring-2 focus:ring-green-500 outline-none text-gray-700"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isTyping}
            className="p-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
