import http from "@/http-common";

class FlightsDataService {
    get(id: any): Promise<any> {
        return http.get(`/${id}`);
    }
}


export default new FlightsDataService();