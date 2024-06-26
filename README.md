# GEMINI-CHAT
## Technologies Used
- React (Frontend)
- Express.js (Backend)
- Google Generative AI API
- Fetch API for making HTTP requests

## Getting Started
### Prerequisites
- Node.js and npm installed on your machine.
- A Google API key for the Generative AI.

bash
```
    npm install
```


Create a .env file in the server directory and add your Google API key:
env
```
    GOOGLE_API_KEY=your-google-api-key
```

## Running the Application

### Start the server:
bash
```
cd server
node server.js
```

### Start frontend and backend:
bash
```
cd client
npm run start:frontend
npm run start:backend
```
Open your browser and go to http://localhost:3000 to see the application in action.

## Usage
Input a question: Type your question in the input field and click the "Search" button to get an AI-generated response.
Random prompt: Click the "Random Prompt" button to get a random question from a predefined list.
Clear error: If there is an error message, click the "Clear" button to remove it.

## File Structure

```
gemini-chat/
│  ├── public/
│  ├── src/
│  │   ├── App.js
│  │   ├── index.js
│  │   └── ... (other components and assets)
│  ├── package.json
│  └── ... (other config files)
│── server.js
├── README.md
└── ... (other root files)
```
