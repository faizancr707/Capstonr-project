import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//importing files
import { errorMiddleware } from "./middleware/error.js";
import { dbConnection } from "./database/dbConnection.js";
import reservationRoutes from "./routes/reservationRoutes.js";



const app= express();

dotenv.config({path : "./config/config.env"});

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use("/api/v1/reservation", reservationRoutes);

dbConnection();
app.use( errorMiddleware);




app.listen(process.env.PORT,  ()=>{
    console.log(`Server Running On Port : ${process.env.PORT}`);
}
);
