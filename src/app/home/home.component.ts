import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagetitle:string="Display Image";
  homeimage:string="assets/images/homebanner.jpg";
  sampletext:string="Hello";
  name:string="Raja";
  constructor() { }

  ngOnInit(): void {
  }

  getText(){
    this.name="Rani";
  }

}
