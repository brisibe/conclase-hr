import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  username: string | null

  constructor() { }


  ngOnInit(): void {
    this.username = window.localStorage.getItem("username")
  }


}
