import express from "express"
import cors from "cors"
import players from "./api/players.js"
import graph from "./api/graph.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use('/players', players);
app.use('/graph', graph);


export default app;
