import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from './../core/configs/configs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({ providedIn: 'root' })
export class GenerateReceiptService {
    constructor(private http: HttpClient) { }

    generate(value: any) {
        return this.http.post(`${API_ENDPOINT}/payment-receipts`, { value })
    }

    getAllReceipts() {
        return this.http.get(`${API_ENDPOINT}/payment-receipts`)
    }


}