import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { filter, catchError, } from 'rxjs/operators';
import { API_ENDPOINT } from '../core/configs/configs';



interface Users {
    id: string,
    email: string,
    password: string,
    isAdmin: boolean
}

interface Register {
    username: string,
    email: string,
    password: string
}




@Injectable({ providedIn: 'root' })
export class AuthService {
    token: any
    error: any

    constructor(private http: HttpClient, private router: Router) {

    }



    login(email: string, password: string): Observable<any> {

        return this.http.post(`${API_ENDPOINT}/login`, { email, password }).pipe(
            catchError((err) => {
                return throwError(() => err.error)
            }))
    }

    register(val: Register): Observable<any> {
        return this.http.post(`${API_ENDPOINT}/register`, val).pipe(
            catchError(err => {
                return throwError(() => err.error)
            })
        )
    }

    logout() {

        window.localStorage.removeItem("Token")

    }

    isAuthorized() {
        let token = window.localStorage.getItem("Token");
        if (!token) this.router.navigate(['/login'])
        return token ? true : false
    }


    // private error(message) {

    // }



}
