import {Component, OnInit} from 'angular2/core';

export class menu{
	id: number;
	name: string;
	url: src;
	nutrition: string;
}

@Component({
  selector: 'my-app',
  template:`
  <div>
  	<div class='header'>
    <img src='logo.png'>
    <h2>This week menu</h2>
    </div>
    	<nav style='float:left'>
    	<ul class='menulist'>
    		<li *ngFor='#menu of menudata' (click)='onSelect(menu)'[class.selected]='menu === selectedMenu'>
    			<span class='badge'>{{menu.id}}</span>{{menu.name}}
    		</li>
    	</ul>
    	</nav>
    	<div *ngIf="selectedMenu">
    		<section>
    		<img src='{{selectedMenu.url}}' width='400px' height='300px'>
			</section>
			<section >
			<h2>Nutrition {{selectedMenu.name}}</h2>
			<h3>{{selectedMenu.nutrition}}</h3>
			</section>
		</div>
  `,styles:[`

    .header {
      text-align:center;

    }
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .menulist {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .menulist li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #8DCEC8;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .menulist li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .menulist li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .menulist .text {
      position: relative;
      top: -3px;
    }
    .menulist .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }




    
  `]
 
})

export class MenuComponent	{
	menudata = MENU ;
	selectedMenu: Menu;


	onSelect(menu: Menu){ this.selectedMenu = menu;}
}

var MENU: Menu[] = [
  { "id": 1, "name": "ลาบไก่"url:"p1.jpg"nutrition:"Protein:43.7 Carb:29.5 Fat:2 Calories:310.8"},
  { "id": 2, "name": "ไก่ผัดเห็ดฟางผัดโหระพา"url:"p2.jpg"nutrition:"Protein:43.7 Carb:27 Fat:2.5 Calories:305.3" },
  { "id": 3, "name": "แกงฮังเล"url:"p3.jpg"nutrition:"Protein:45.2 Carb:28.7 Fat:2.5 Calories:318.1" },
  { "id": 4, "name": "ไก่อบซอสมะเขือเทศ"url:"p4.jpg"nutrition:"Protein:42.7 Carb:26.5 Fat:2 Calories:294.8" },
  { "id": 5, "name": "ไก่สับผัดไข่ขาวเห็ดหูหนู"url:"p5.jpg"nutrition:"Protein:46.6 Carb:25.7 Fat:2.5 Calories:311.7" },
  { "id": 6, "name": "ไก่ผัดหนำเลี๊ยบ"url:"p6.jpg"nutrition:"Protein:42.7 Carb:27 Fat:2.5 Calories:301.3" },
  { "id": 7, "name": "ไก่ผัดเปรี้ยวหวาน"url:"p7.jpg"nutrition:"Protein:43.5 Carb:28.6 Fat:2.5 Calories:310.9" },
  { "id": 8, "name": "แกงเขียวหวานปลากระพง"url:"p8.jpg"nutrition:"Protein:43.5 Carb:28.2 Fat:5 Calories:324.6" }
]; 
