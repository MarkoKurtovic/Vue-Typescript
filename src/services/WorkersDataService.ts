import http from "@/http-common";

class WorkersDataService {
    getAll(): Promise<any> {
        return http.get("");
    }
}


export default new WorkersDataService();