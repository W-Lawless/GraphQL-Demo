import express from 'express';
import "dotenv/config.js"

const app = express()

app.get('/rest', (req,res) => {
    res.json({success: true})
})


app.listen(process.env.PORT, () => {
    console.log('booted', process.env.PORT)
}) 