import express from "express" 
import graphCtrl from "./graph.controller.js"

const router = express.Router()

router.route("/graph/:name").get(graphCtrl.apiGetPlayersByName)

export default router