import { fadeIn } from './../../animations/fade-in';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
  animations: [fadeIn]
})
export class CameraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
