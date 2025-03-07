// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const bandsController = require('./controllers/bands_controller')
const eventsController = require('./controllers/events_controller')
const stagesController = require('./controllers/stages_controller')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
// const sequelize = new Sequelize (process.env.PG_URI)

// try {
//     sequelize.authenticate()
//     console.log(`Connectioned with Sequelize at ${process.env.PG_URI}`)
// } catch (err) {
//     console.log(`Unable to connection to PG: ${err}`)
// }

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

app.use('/bands', bandsController)
app.use('/events', eventsController)
app.use('/stages', stagesController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})