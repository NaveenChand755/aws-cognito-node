const express = require('express')
const app = express();



//Initialize middleware
app.use(express.json({extended:false}))

app.get('/hello', (req,res)=>{
    res.send('Hello')
});

app.use('/auth/signup',require('./Routes/register'))
app.use('/auth/login',require('./Routes/login'))
app.use('/auth/verify-user',require('./Routes/verify'))
app.use('/auth/ngnix-logs',require('./Routes/ngnixlogs'))

const PORT = process.env.PORT || 5000

app.listen(PORT , () =>{
    console.log(`Server listening on port ${PORT}`)
})