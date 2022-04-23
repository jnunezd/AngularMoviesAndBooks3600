import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items : any[] = [
    {
      url:'home',
      text:'Home',
      icon:'bi-house'
    },
    {
      url:'about',
      text:'About',
      icon:'bi-house'
    },
    {
      url:'contact',
      text:'Contact',
      icon:'bi-house'
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
