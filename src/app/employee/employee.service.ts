import { Employee } from './../core/model/Employee';
import { API_ENDPOINT } from './../core/configs/configs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {

  }

  getAllEmployees() {
    return this.http.get(`${API_ENDPOINT}/employees`)
  }
  getEmployee(id: string) {
    return this.http.get(`${API_ENDPOINT}/employees/${id}`)
  }
  addEmployee(value: Employee) {
    return this.http.post(`${API_ENDPOINT}/employees`, { value })
  }
  updateEmployee(id: string, obj: any) {
    return this.http.patch(`${API_ENDPOINT}/employees/${id}`, obj)
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${API_ENDPOINT}/employees/${id}`)
  }

}
