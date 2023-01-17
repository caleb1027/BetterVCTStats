import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
let graph

export default class graphDAO {
    static async injectDB(conn) {
        if (graph) {
          return
        }
        try {
          graph = await conn.db(process.env.VCTSTATS).collection("GraphData")
        } catch (e) {
          console.error(
            `Unable to establish a collection handle in graphsDAO: ${e}`,
          )
        }
      }

      static async getPlayerByName(playerName) {
        const regex = new RegExp(["^", playerName, "$"].join(""), "i");
        const query ={ name: regex}
        const player = await graph.findOne(query)
        return player
      }
}