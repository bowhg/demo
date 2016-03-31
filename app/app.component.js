System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var menu, MenuComponent, MENU;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            menu = (function () {
                function menu() {
                }
                return menu;
            }());
            exports_1("menu", menu);
            MenuComponent = (function () {
                function MenuComponent() {
                    this.menudata = MENU;
                }
                MenuComponent.prototype.onSelect = function (menu) { this.selectedMenu = menu; };
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <div>\n  \t<div class='header'>\n    <img src='logo.png'>\n    <h2>This week menu</h2>\n    </div>\n    \t<nav style='float:left'>\n    \t<ul class='menulist'>\n    \t\t<li *ngFor='#menu of menudata' (click)='onSelect(menu)'[class.selected]='menu === selectedMenu'>\n    \t\t\t<span class='badge'>{{menu.id}}</span>{{menu.name}}\n    \t\t</li>\n    \t</ul>\n    \t</nav>\n    \t<div *ngIf=\"selectedMenu\">\n    \t\t<section>\n    \t\t<img src='{{selectedMenu.url}}' width='400px' height='300px'>\n\t\t\t</section>\n\t\t\t<section >\n\t\t\t<h2>Nutrition {{selectedMenu.name}}</h2>\n\t\t\t<h3>{{selectedMenu.nutrition}}</h3>\n\t\t\t</section>\n\t\t</div>\n  ", styles: ["\n\n    .header {\n      text-align:center;\n\n    }\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .menulist {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .menulist li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #8DCEC8;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .menulist li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .menulist li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .menulist .text {\n      position: relative;\n      top: -3px;\n    }\n    .menulist .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n\n\n\n\n    \n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MenuComponent);
                return MenuComponent;
            }());
            exports_1("MenuComponent", MenuComponent);
            MENU = [
                { "id": 1, "name": "ลาบไก่", url: "p1.jpg", nutrition: "Protein:43.7 Carb:29.5 Fat:2 Calories:310.8" },
                { "id": 2, "name": "ไก่ผัดเห็ดฟางผัดโหระพา", url: "p2.jpg", nutrition: "Protein:43.7 Carb:27 Fat:2.5 Calories:305.3" },
                { "id": 3, "name": "แกงฮังเล", url: "p3.jpg", nutrition: "Protein:45.2 Carb:28.7 Fat:2.5 Calories:318.1" },
                { "id": 4, "name": "ไก่อบซอสมะเขือเทศ", url: "p4.jpg", nutrition: "Protein:42.7 Carb:26.5 Fat:2 Calories:294.8" },
                { "id": 5, "name": "ไก่สับผัดไข่ขาวเห็ดหูหนู", url: "p5.jpg", nutrition: "Protein:46.6 Carb:25.7 Fat:2.5 Calories:311.7" },
                { "id": 6, "name": "ไก่ผัดหนำเลี๊ยบ", url: "p6.jpg", nutrition: "Protein:42.7 Carb:27 Fat:2.5 Calories:301.3" },
                { "id": 7, "name": "ไก่ผัดเปรี้ยวหวาน", url: "p7.jpg", nutrition: "Protein:43.5 Carb:28.6 Fat:2.5 Calories:310.9" },
                { "id": 8, "name": "แกงเขียวหวานปลากระพง", url: "p8.jpg", nutrition: "Protein:43.5 Carb:28.2 Fat:5 Calories:324.6" }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map