import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items : any[] = [
    {
      url:'peliculas',
      text:'Peliculas',
      icon:'bi-house'
    },
    {
      url:'libros',
      text:'Libros',
      icon:'bi-book'
    },
    {
      url:'contact',
      text:'Contact',
      icon:'bi-envelope'
    },
    {
      url:'about',
      text:'About',
      icon:'bi-info-circle'
    },
    
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
