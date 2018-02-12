import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registerpart1',
  templateUrl: './registerpart1.component.html',
  styleUrls: ['./registerpart1.component.scss']
})
export class Registerpart1Component implements OnInit {

  constructor(private _router : Router) {

   }

   registerNext() : void{
     this._router.navigate(['/register2']);
   }
  ngOnInit() {
  }

}
