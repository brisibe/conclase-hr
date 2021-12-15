import { ClientService } from './clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: any;

  constructor(private clientsService: ClientService) { }

  ngOnInit(): void {
    this.clientsService.getAllClients().subscribe(res => {
      console.log(res)
      this.clients = res
    })
  }

}
