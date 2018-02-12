import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registerpart2',
  templateUrl: './registerpart2.component.html',
  styleUrls: ['./registerpart2.component.scss']
})
export class Registerpart2Component implements OnInit {

  constructor(private _router : Router) { }

  registerSuccess() : void{
    this._router.navigate(['/registerSuccess']);
  }

  ngOnInit() {
  }

}
