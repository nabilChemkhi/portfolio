import { Component } from '@angular/core';
import { faCheckCircle, faCoffee, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  faCheckCircle =faCheckCircle
  faCoffee = faCoffee;
  //faHouse=faHouse


  aboutLink='/about'
}
