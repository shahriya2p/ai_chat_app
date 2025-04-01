const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/suggestions", (req, res) => {
  const { message } = req.body;

  // Improved ChatGPT-style logic
  let suggestions;
  if (!message.trim()) {
    suggestions = ["Please type something to get suggestions."];
  } else if (message.toLowerCase().includes("hello")) {
    suggestions = ["Hi there! How can I help you?", "Hello! Need assistance?", "Hey! What's up?"];
  } else if (message.toLowerCase().includes("help")) {
    suggestions = ["Sure! What do you need help with?", "I'm here to assist!", "How can I assist you today?"];
  } else {
    suggestions = [
      `Got it, you're asking about: "${message}"`,
      `Let me look into "${message}" and get back to you.`,
      `Can you please clarify what you mean by "${message}"?`
    ];
  }

  // Simulating AI response delay (500ms - 2500ms)
  setTimeout(() => {
    res.json({ suggestions });
  }, Math.random() * 2000 + 500);
});

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});
