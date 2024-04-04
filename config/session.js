const MongoStore = require("connect-mongo")
const session = require("express-session")
const passport = require("passport")
const { Passport } = require("passport")
const { config } = require("./config")

const sessionConfig = require("express").Router()
sessionConfig.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: config.dbURL,
        collectionName: "sessions"
    })
    //   cookie: { secure: true }
}))

sessionConfig.use(passport.initialize())
sessionConfig.use(passport.session())


module.exports = {sessionConfig}