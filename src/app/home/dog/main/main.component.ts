import { Component, OnInit } from '@angular/core';
import { fadeIn } from './../../../animations/fade-in';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [fadeIn]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
