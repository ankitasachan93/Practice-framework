import { APIRequestContext } from "@playwright/test";

export class ApiHelper{

    constructor(private request: APIRequestContext){
        this.request = request
    }

    async getRequest(url : string){
        return await this.request.get(url)
    }

    async postRequest(url:string, data:object){
        return await this.request.post(url,{data})
    }

    async putRequest(url:string, data:object){
        return await this.request.put(url,{data})
    }

    async patchRequest(url:string, data:object){
        return await this.request.patch(url, {data})
    }

    async deleteRequest(url:string){
        return await this.request.delete(url)
    }
}