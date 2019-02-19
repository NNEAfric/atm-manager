import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainapp',
  templateUrl: './mainapp.component.html',
  styleUrls: ['./mainapp.component.scss']
})
export class MainappComponent implements OnInit {
  public appPages = [
    {
      title: 'My ATM\'s',
      url: '/atms',
      icon: 'home'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
