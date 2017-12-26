import { Component, OnInit } from '@angular/core';
import { fadeIn } from './../../../animations/fade-in';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  animations: [fadeIn]
})
export class PhotoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
