import React, { useState } from "react";

export default function CarComparisonChatBot() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I'm your CarBot 🤖 Ask me to compare cars or suggest one under your budget." }
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    if (!userInput.trim()) return;

    const newUserMessage = { type: "user", text: userInput };
    const newBotMessage = { type: "bot", text: getBotResponse(userInput) };

    setMessages([...messages, newUserMessage, newBotMessage]);
    setUserInput("");
  };

  const getBotResponse = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("compare") && text.includes("with")) {
      const cars = text.split("compare")[1].split("with");
      const car1 = cars[0].trim();
      const car2 = cars[1].trim();
      return `Here's a quick comparison between ${car1} and ${car2}:\n- ${car1}: 18 km/l, ₹8.5L\n- ${car2}: 20 km/l, ₹9.2L\n(This is just a demo, real data coming soon!)`;
    }

    if (text.includes("best car under")) {
      const price = text.match(/\d+/g);
      return `Best cars under ₹${price?.[0]} lakhs:\n- Tata Punch\n- Hyundai Exter\n- Maruti Fronx\n- Kia Sonet`;
    }

    if (text.includes("details of") || text.includes("show") || text.includes("tell me about")) {
      const carName = text.split("of")[1] || text.split("about")[1];
      return `Details of ${carName?.trim()}:\n- Mileage: 18 km/l\n- Engine: 1.2L\n- Price: ₹7.5L\n- Rating: ⭐⭐⭐⭐`;
    }

    return "Sorry, I didn't understand that.\nTry saying:\n- Compare Swift with Baleno\n- Best car under 10 lakh\n- Details of Creta";
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
      <div className="bg-gray-100 px-4 py-2 font-bold text-lg">Car Comparison ChatBot</div>
      <div className="h-96 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg max-w-xs ${
              msg.type === "user" ? "bg-blue-500 text-white self-end ml-auto" : "bg-gray-200 text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex border-t border-gray-300">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask something..."
          className="flex-1 p-2 outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-green-600 text-white px-4 hover:bg-green-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
