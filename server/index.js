const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/AuthRoutes");
const cookieParser = require("cookie-parser");

const app = express();

// app.listen(4000, () => {
//   console.log("Server Started on PORT 4000");
// });

const CONNECTION_URL = 'mongodb+srv://adm:adm123@cluster0.bg6bu.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose
  .connect(CONNECTION_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server is runing on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes);