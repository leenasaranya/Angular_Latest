import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.scss']
})
export class RegisterSuccessComponent implements OnInit {

  constructor(private _router :Router) { }

  login() : void{
    this._router.navigate(['']);
  }
  ngOnInit() {
  }

}
