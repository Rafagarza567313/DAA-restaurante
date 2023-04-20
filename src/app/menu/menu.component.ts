import { Component, OnInit } from '@angular/core';
import { Menu } from '../_models/menu.models';
import { MenuService } from '../_services/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menulist: Menu[] =[];

  constructor(private menuService: MenuService){}

  ngOnInit():void{
    this.menulist=this.menuService.getMenuList();
  }
}