
# ChatGPT Messaging Panel

This project simulates a real-time messaging panel integrated with an AI suggestion system, similar to ChatGPT. It features a React frontend with a mock backend, and aims to test your ability to build real-time messaging functionality, enhance UX, and integrate AI-based suggestions.

![image](https://github.com/user-attachments/assets/697e7ab6-670a-4ab6-b41b-31d8b2b863d3)


## 🧪 Features & Tasks

### Frontend (React)
- Improved message input UX with features like "press Enter to send" and auto-focus.
- Basic message grouping by user and agent roles.
- Styling of suggestion list as clickable buttons.
- "Click to insert" functionality for suggestions.
- Typing indicator shown before suggestions.

### Backend (Node.js)
- Mock ChatGPT logic that handles various types of user inputs.
- Optional: Simulated delays or error handling for testing fallback scenarios.

### Bonus (If you're looking to extend the project)
- Replace mock backend with a real OpenAI API call.
- Simulate multiple agents.
- Implement session management or WebSocket support for real-time interactions.

## 📁 Project Structure

The project is divided into two main parts: `backend` (Node.js) and `client` (React). Below is the folder structure:

```
├── backend
│   └── server.js
├── client
│   ├── src
│      ├── App.jsx
```

## ⚙️ Getting Started

Follow the steps below to set up the project locally.

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn for managing dependencies

### Setup (Please follow all steps in mentioned order)

1. **Clone the repository:**

   ```
   git clone https://github.com/shahriya2p/ai_chat_app
   cd ai_chat_app
   ```

2. **Install backend dependencies:**

   Navigate to the `backend` folder and run:

   ```
   npm install
   ```

3. **Install frontend dependencies:**

   Navigate to the `client` folder and run:

   ```
   npm install
   ```

4. **Run the backend server:**

   From the `backend` directory, run:

   ```
   npm start
   ```

   This will start the mock API server.

5. **Run the frontend application:**

   From the `client` directory, run:

   ```
   npm run dev
   ```

   This will start the React frontend on `http://localhost:5173`.

### Testing the Application

Once both the backend and frontend are running, you can test the messaging panel in your browser at `http://localhost:5173`. Interact with the panel, input messages, and see real-time suggestions.

## 📦 Deployment

For production deployment, ensure that both backend and frontend are correctly configured to interact. The backend should be deployed on a server (e.g., AWS, Heroku) and the frontend should be hosted via a static file hosting service (e.g., Netlify, Vercel).

## 💡 Next Steps & Enhancements

- Replace the mock backend with a real API like OpenAI.
- Simulate multiple agents and handle multiple conversations at once.
- Add session management for persistent chat states across user sessions.
- Implement WebSocket for true real-time messaging.
