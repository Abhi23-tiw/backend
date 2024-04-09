import express from "express";
import cors from "cors" // CORS is used to enable cross-origin requests between a client and a server.
import cookieParser from "cookie-parser" // to access cookies from server

const app = express()



app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true // This indicates that the server allows cookies, HTTP authentication, and SSL certificates to be sent in cross-origin requests
}))
// the below lines set up middlewares to prase json
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
/*
    parsing is often associated with interpreting code written in a programming language
    Middleware --> beech ke checking ko(err,req,res,next)

*/

export {app}