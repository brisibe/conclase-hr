import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatMenuModule} from "@angular/material/menu";
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from "@angular/material/icon";
import { HttpClientModule } from '@angular/common/http';
import {LayoutComponent} from "./layout/layout.component";
import { PageNotFoundComponent } from './page-not-found/notfount.component';
import { AvatarComponent } from './layout/avatar/avatar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from "@angular/material/list";
import { MatToolbarModule } from '@angular/material/toolbar';
import {RouterModule, Routes} from "@angular/router";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

 const routes : Routes = [
   { path: "" , component : LayoutComponent }
]

@NgModule({
  declarations: [LayoutComponent, AvatarComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,

    MatSidenavModule,
    MatListModule,
    MatToolbarModule,

  ],
  exports: [RouterModule, HttpClientModule, FormsModule, ReactiveFormsModule, MatCardModule, MatButtonModule, MatDividerModule, MatMenuModule, MatIconModule, MatInputModule, MatListModule ]
})
export class SharedModule { }
