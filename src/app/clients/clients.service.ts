import { API_ENDPOINT } from './../core/configs/configs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    constructor(private http: HttpClient) { }

    getAllClients() {
        return this.http.get(`${API_ENDPOINT}/clients`)
    }
}