const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

// connect db 
// require('./config-db')()

express()
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/api/fits', require('./fitRoutes'))
  .use( require('./errorMiddleware') )
  .listen(port, () => console.log(`server started on port ${port}`))
