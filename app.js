import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";

const app = express();

app.use(express.json());
app.use('/api/user',router);

mongoose.connect(
    'mongodb+srv://nashwin2548:8ucgS5TMRDJzk7FO@cluster0.qfbaq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
)
.then(()=>app.listen(3000))
.then(() => 
    console.log("Connected to Database and Listening to Localhost 3000")
)
.catch((err) => console.log(err));

// 8ucgS5TMRDJzk7FO



// app.use(express.json());
// app.use("/api", (req,res,next)=>{
//     res.send("fuck this");
// });



