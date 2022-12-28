import express from "express" 
import PlayerCtrl from "./players.controller.js"

const router = express.Router()

router.route("/").get(PlayerCtrl.apiGetPlayers)
router.route("/:name").get(PlayerCtrl.apiGetPlayersByName)

export default router