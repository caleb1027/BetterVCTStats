import PlayersDAO from "../dao/playersDAO.js"

export default class PlayerCtrl {
    static async apiGetPlayers(req, res, next) {
        const playersPerPage = req.query.playersPerPage ? parseInt(req.query.playersPerPage, 10) : 200
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if(req.query.name) {
            filters.name = req.query.name
        } else if (req.query.team){
            filters.team = req.query.team
        }

        const {playersList, totalNumPlayers} = await PlayersDAO.getPlayers({
            filters, page, playersPerPage
        })

        let response = {
            players: playersList,
            page: page,
            filters: filters,
            entriesPerPage: playersPerPage,
            numResults: totalNumPlayers
        }
        res.json(response)
    }

    static async apiGetPlayersByName(req, res, next) {
        try {
            let name = req.params.name || {}
            let player = await PlayersDAO.getPlayerByName(name)
            if(!player) {
                res.status(404).json({error: "Not Found"})
                return
            }
            res.json(player)
        } catch (e) {
            console.log(`API Error: ${e}`)
            res.status(500).json({error: "Not Found"})
        }
    }
}