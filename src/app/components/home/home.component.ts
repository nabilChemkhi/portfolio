import { ChangeDetectorRef, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
aboutLink='/about'
actvLanguage:string='en'
constructor(private translate: TranslateService,private languageService: LanguageService){
  translate.setDefaultLang('en'); // Set the default language
  translate.use('en'); // Use English as the initial language
}

switchLanguage(language: string) {

  //console.log("Switching language to:", language);
  this.actvLanguage = language;
 // console.log("Active language now:", this.actvLanguage);
  this.languageService.setLanguage(language);
  this.languageService.setActiveLanguage(language);

  //private cdr: ChangeDetectorRef
  // this.cdr.detectChanges();
}



}
