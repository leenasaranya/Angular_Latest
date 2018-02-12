import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-laptop-select',
  templateUrl: './laptop-select.component.html',
  styleUrls: ['./laptop-select.component.scss']
})
export class LaptopSelectComponent implements OnInit {
  constructor(private _router :Router) { }

  ngOnInit() {
  }

}
