const dotenv = require("dotenv")
dotenv.config();
const express =require("express");
const mongoose = require("mongoose");
const bookRoute = require("./route/book.route");
const userRoute = require("./route/user.route");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGOURI).then(()=>console.log("MongoDb Connected Successfully")).catch((err)=>console.log("error on mongodb",err));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT,()=>console.log(`Server Running at ${PORT}`));