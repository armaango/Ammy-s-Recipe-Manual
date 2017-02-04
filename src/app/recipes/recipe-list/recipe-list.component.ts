import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'arc-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dum','Dum','http://www.dummymag.com//media/img/dummy-logo.png');


  constructor() { }

  ngOnInit() {
  }

}
