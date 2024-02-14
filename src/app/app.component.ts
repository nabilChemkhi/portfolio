import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'portfolio';






  ngOnInit(): void {
   // i18next.use(XHR).init(i18nextOptions);


  //  i18next.use(XHR).init({
  //   backend: this.options,
  // });
  }

}
