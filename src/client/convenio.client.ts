import { Convenio } from "@/model/convenio.model";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import axios, { AxiosInstance } from "axios";


export class ConvenioClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/convenio',
            headers: { 'Content-type': 'application/json' }
        });
    }


    public async atualizar(convenio: Convenio): Promise<void> {
        try {
            return (await this.axiosClient.put(`/${convenio.id}`, convenio)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }


}