import { Injectable } from '@angular/core';
import { Menu } from 'src/app/_models/menu.models';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menulist: Menu[] =[
    {
      title:"salmon",
      image:"../../assets/menu/salmon.jpg",
      description:"lomos de salmón en la fuente de horno y salpimentamos. Pincelamos con la mezcla de miel y limón. Metemos en el horno precalentado durante 10 minutos",
    },
    {
      title:"Lasaña",
      image:"../../assets/menu/lasaña.jpg",
      description:" Se sirve en láminas superpuestas intercaladas con capas de carne (ragú) en salsa boloñesa y bechamel",
    },
    {
      title:"sandwich",
      image:"../../assets/menu/sandwich.jpg",
      description:"Nuestra jugosa carne artesanal. y la receta especial, vegetales frescos, pan recién horneado y nuestras salsas, harán que tu boca descubra el sabor.",
    },
    {
      title:"Pasta",
      image:"../../assets/menu/pasta.jpg",
      description:"Pasta carbonara tradicional de la cocina italiana, con tocino y queso parmesano",
    },
    {
      title:"pizza",
      image:"../../assets/menu/pizza.jpg",
      description:"la pizza gourmet le da la oportunidad al chef de reinventar lo clásico en algo nuevo y original, explorando combinaciones de sabores y texturas diferentes.",
    }
  ]

  constructor() { }
  getMenuList():Menu[]{
    return this.menulist;
  }
}
