const express = require('express');
const notes = require("./data/notes");
const dotenv =  require('dotenv')
const DB_Connect = require("./config/db")
const userRoutes  = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddlewares');

const app = express();
dotenv.config();
DB_Connect();


const PORT = process.env.PORT || 5000;
app.get('/', (req,res) => {
    res.send("hiii, this is my first website");
});

app.get("/api/notes", (req,res) =>  {
    res.json(notes);
});

app.use(express.json());
app.use("/api/users", userRoutes);


app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log('server is working on 5000'))