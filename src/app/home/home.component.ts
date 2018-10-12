import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
 sideNavMenu: any;topNavMenu: any;  
	
  constructor(private _router : Router) {    
     this.sideNavMenu = [{"text":"Side","expand":false,"id":null,"leaf":false,"icon":"fa fa-align-justify fa 2x","routerLink":null,"children":[{"text":"testmenusapp","expand":true,"id":"be0ab372-3991-4381-bf9c-2e51a0740be5","leaf":false,"icon":"fa fa-folder-open-o","routerLink":null,"children":[{"text":"core","expand":true,"id":"e9daaa81-1b9e-493a-baa1-5578a67d3e5b","leaf":false,"icon":"fa fa-folder-open-o","routerLink":null,"children":[{"text":"ui one","expand":false,"id":"0096f9fd-0c51-4082-baad-44ed8523d3cf","leaf":true,"icon":"fa fa-file-text-o","routerLink":"testmenusapp/core/ui-one","children":null},{"text":"login","expand":false,"id":"b97d6ced-c349-4dad-a0fb-08b18b0b8560","leaf":true,"icon":"fa fa-file-text-o","routerLink":"testmenusapp/core/login","children":null}]}]}]}]; 
 this.topNavMenu = [{"text":"Top","expand":false,"id":null,"leaf":false,"icon":"fa fa-angle-double-right fa 2x","routerLink":null,"children":[{"text":"login","expand":false,"id":"b97d6ced-c349-4dad-a0fb-08b18b0b8560","leaf":true,"icon":"fa fa-file-text-o","routerLink":"testmenusapp/core/login","children":null}]}]; 
 }
  routeToLink(data: any) {
        if( data.children==null && data.routerLink){
   this._router.navigate([data.routerLink]);
  }else if(data.data.node.children==null && data.data.node.routerLink) {
  this._router.navigate([data.data.node.routerLink]);
  }
    }
  
}
