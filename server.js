const PORT = 8000
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express(); 
app.use(cors()); 
app.use(express.json());


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
app.post('/gemini', async(req, res) => {
    console.log(req.body.history)
    console.log(req.body.message)
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash"
    });

    const chat = model.startChat({
        history: req.body.history,
    });

    const msg = req.body.message;

    const result = await chat.sendMessage(msg);
    const response = result.response;
    const text = response.text();
    res.send(text);
})


