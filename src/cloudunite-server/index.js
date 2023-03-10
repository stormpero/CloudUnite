import dotenv from "dotenv"
dotenv.config()
import express from "express"


//CORS
import cors from "cors"
import {corsOptions} from "./config/corsoptions.js";

//Database
import {sequelize} from "./config/database.js";
import models from "./database/model/index.js"

//Routes
import rootRouter from "./routes/index.js";

//Cookie
import cookieParser from "cookie-parser";

//Errors Handler
import exceptionHandle from "./middleware/exceptionMiddleware.js";



const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

app.use("/api", rootRouter)

app.use(exceptionHandle)



const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({force: process.env.DEV})
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT))
    } catch (e) {
        console.log(e)
    }
}

start()