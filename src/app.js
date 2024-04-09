import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser" // to access cookies from server

const app = express()
// .use connect karta hai middlewares ko


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
/*
    Middleware --> beech ke checking ko(err,req,res,next)
    
*/

export {app}