import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ClientsRoutingModule } from './clients.routing.module';
import { ClientsComponent } from './clients.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ClientsComponent],
    imports: [CommonModule, ClientsRoutingModule, HttpClientModule, MatCardModule],
    exports: [],
    providers: [],
})
export class ClientsModule { }