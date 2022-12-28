import express from "express"
import cors from "cors"
import players from "./api/players.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use('/players', players);


export default app;
