const express = require('express')
const connectDB = require('./config/db')

const app = express();
const PORT = process.env.PORT || 5000
connectDB()

//init middleware (allow the use of req.body to access json data)
//e.g. in postman send raw body json data and see it print in console 
app.use(express.json())

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))

app.get('/', (req,res)=> res.send('API Running'))

app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))