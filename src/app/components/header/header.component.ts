import { ChangeDetectorRef, Component, ElementRef, OnInit, Directive, Signal, signal, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//import Typed from 'typed.js';
import { LanguageService } from '../../services/language.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


actvLanguage:string='en'
str:string[]=[]
private myFn(language: string) {
if (language=== 'en'){
  this.str=['Software Engineer','Full Stack Developer','Freelancer']
}
else if(language=== 'fr'){
  this.str=['Ingénieur logiciel','Développeur Full Stack','Freelancer']
}
}








    private typedInstance: Typed | null = null;

    constructor(private translateService: TranslateService,private languageService: LanguageService ) {
      // Souscrire aux changements de langue
     // this.translateService.onLangChange.subscribe(() => {
      // this.loadTranslatedStrings();
     // });


    }

    ngOnInit(): void {
      // Charger les valeurs traduites au démarrage
     // this.loadTranslatedStrings();
     this.languageService.activeLanguage$.subscribe((language) => {
      this.actvLanguage = language;

      this.myFn(language);
console.log('actvLanguage' + language)
this.initializeTyped();
    });

     }





    initializeTyped(): void {
      console.log('Initializing Typed.js');


      if (this.typedInstance) {
        this.typedInstance.destroy();
      }
      this.typedInstance = new Typed('.typed', {
        strings: this.str,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,

      });
    }


}
