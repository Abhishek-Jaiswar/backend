import dotenv from 'dotenv'
import express from 'express'
const app = express()
dotenv.config()


const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Math Problem",
            content: "Why was the equal sign so humble? Because he knew he wasn't less than or greater than anyone else."
        },
        {
            id: 2,
            title: "Library Humor",
            content: "Why don't libraries have any lights? Because books make people bright!"
        },
        {
            id: 3,
            title: "Computer Joke",
            content: "Why did the computer go to the doctor? Because it had a virus!"
        },
        {
            id: 4,
            title: "Ocean Joke",
            content: "Why did the ocean break up with the pond? She found him too shallow!"
        },
        {
            id: 5,
            title: "Time Travel",
            content: "Why did the time traveler keep seeing the doctor? He was stuck in a constant loop of check-ups!"
        }
    ];
    res.send(jokes)
})

app.listen(PORT, () => {
    console.log(`Server is running on port no: http://localhost:${PORT}`);
})