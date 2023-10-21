//import express
import express, { Router } from "express";
//import router
import router from "./routes/routes.js";

// init express
const app = express();

// Use Router
app.use(Router)

// listen on port
app.listen(3000, () => console.log('server running at http://localhost:3000'));