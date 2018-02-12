import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mobile-select',
  templateUrl: './mobile-select.component.html',
  styleUrls: ['./mobile-select.component.scss']
})
export class MobileSelectComponent implements OnInit {

  constructor(private _router :Router) { }


  ngOnInit() {
  }

}
