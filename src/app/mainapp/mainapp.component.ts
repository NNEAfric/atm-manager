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
      url: '/mainapp/atms',
      icon: 'card'
    },
    {
      title: 'Profile',
      url: '/mainapp/profile',
      icon: 'contact'
    },
    {
      title: 'About',
      url: '/mainapp/about',
      icon: 'information-circle-outline'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
