import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send("Default URL: ❤️")
})

const PORT = 8080
app.listen(PORT, () => {
    console.warn(`SERVER RUNNING AT: https://localhost:${PORT}`)
})