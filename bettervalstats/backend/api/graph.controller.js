import graphDAO from "../dao/graphDAO.js"

export default class graphCtrl {

    static async apiGetPlayers(req, res, next) {
        const playersPerPage = req.query.playersPerPage ? parseInt(req.query.playersPerPage, 10) : 200
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if(req.query.name) {
            filters.name = req.query.name
        }

        const {playersList, totalNumPlayers} = await graphDAO.getPlayers({
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
            let player = await graphDAO.getPlayerByName(name)
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