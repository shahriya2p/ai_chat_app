import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = { role: "user", content: message };
    setHistory([...history, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setTimeout(() => {
        setSuggestions(data.suggestions || []);
        setHistory((prev) => [
          ...prev,
          {
            role: "ai",
            content: data.suggestions[0] || "I'm not sure, can you clarify?",
          },
        ]);
        setLoading(false);
      }, Math.random() * 2000 + 500); // Simulate AI typing delay
    } catch (err) {
      console.error("Error:", err);
      setSuggestions(["(Error generating suggestions)"]);
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const handleSuggestionClick = (suggestion) => {
    setMessage(suggestion);
    inputRef.current?.focus();
  };

  return (
    <div className="chat-container">
      <h2>AI Messaging Panel</h2>

      <div className="message-history">
        {history.map((msg, idx) => (
          <div key={`role-${msg.role}-${idx}`}
          className={`message ${
            msg.role === "user" ? "user-message" : "agent-message"
          }`}>
            <b>{msg.role === "user" ? "You" : "AI"}:</b>
            <div
              className={`message ${
                msg.role === "user" ? "user-message" : "agent-message"
              }-box`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && <p className="typing-indicator">AI is typing...</p>}
      </div>

      {suggestions.length > 0 && (
        <div className="suggestions">
          <strong>Suggestions:</strong>
          {suggestions.map((s, idx) => (
            <button key={idx} onClick={() => handleSuggestionClick(s)}>
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="input-container">
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default App;
