require('dotenv').config()
require('express-async-errors')
const express = require('express')
app = express()

// connectDB

// routers
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

// error handlers
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())

// routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try
    {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    }
    catch (error)
    {
        console.log(error)
    }
}

start()