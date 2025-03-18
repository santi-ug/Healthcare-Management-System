import express from "express";
import dotenv from "dotenv"; 

dotenv.config();

const app = express();
const port = process.env.PORT_CONNECTION || 3000;

app.listen(process.env.PORT_CONNECTION, () => {
  console.log(`Server is running on port ${port}`);
  
})

