import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
let players

export default class PlayersDAO {
    static async injectDB(conn) {
      if (players) {
        return
      }
      try {
        players = await conn.db(process.env.VCTSTATS).collection("Stats")
      } catch (e) {
        console.error(
          `Unable to establish a collection handle in playersDAO: ${e}`,
        )
      }
    }

    static async getPlayers({
        filters = null,
        page=0,
        playersPerPage =200
    } = {}) {
        let query
        if(filters) {
            if("name" in filters) {
                query = {$text: { $search: filters["name"]}}
            }
        }

    let cursor
    try {
        cursor = await players.find(query)
    } catch (e) {
        console.error(`Error in find(): ${e}`)
        return { playersList: [], totalNumPlayers: 0}
    }
    const displayCursor = cursor.limit(playersPerPage).skip(playersPerPage * page)

    try {
        const playersList = await displayCursor.toArray()
        const totalNumPlayers = await players.countDocuments(query)
        return {playersList, totalNumPlayers}
    } catch (e) {
        console.error(`Error in cursor: ${e}`)
        return { playersList: [], totalNumPlayers: 0}
        }
    }

    static async getPlayerByName(playerName) {
        const regex = new RegExp(["^", playerName, "$"].join(""), "i");
        const query ={ name: regex}
        const player = await players.findOne(query)
        return player
    }
}