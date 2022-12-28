import http from "../http-common.js"

class PlayerDataService {
    getAll(page=0) {
        return http.get(`?page=${page}`)
    }
    findName(name) {
        return http.get(`/${name}`)
    }
}

export default new PlayerDataService()