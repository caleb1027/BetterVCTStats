import express from "express" 
import graphCtrl from "./graph.controller.js"

const router = express.Router()

router.route("/:name").get(graphCtrl.apiGetPlayersByName)

export default router