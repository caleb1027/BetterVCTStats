import http from "../http-common.js"

class GraphDataService {
    getAll(page=0) {
        return http.get(`?page=${page}`)
    }
    findName(name) {
        return http.get(`/graph/${name}`)
    }
}

export default new GraphDataService()