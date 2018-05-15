import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  protected jbtHeading: string = 'Hello World';  
  protected jbtText: string = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
  protected jbtBtnText: string = 'Read More';
  protected jbtBtnUrl: string = '/about';

  constructor() { }

  ngOnInit() {
  }

}
