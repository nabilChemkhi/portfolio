import { ChangeDetectorRef, Component, ElementRef, OnInit, Directive, Signal, signal, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Typed from 'typed.js';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


//  actvLanguage:string='en'
// str:string[]=[]
// private myFn(language: string) {
// if (language=== 'en'){
//   this.str=['Software Engineer','Full Stack Developer','Freelancer']
// }
// else if(language=== 'fr'){
//   this.str=['Ingénieur logiciel','Développeur Full Stack','Freelancer']
// }
// }








//     private typedInstance: Typed | null = null;

//     constructor(private translateService: TranslateService,private languageService: LanguageService ) {
//       // Souscrire aux changements de langue
//       this.translateService.onLangChange.subscribe(() => {
//       // this.loadTranslatedStrings();
//       });


//     }

//     ngOnInit(): void {
//       // Charger les valeurs traduites au démarrage
//      // this.loadTranslatedStrings();
//      this.languageService.activeLanguage$.subscribe((language) => {
//       this.actvLanguage = language;

//       this.myFn(language);
// console.log('qsdddfd' + this.actvLanguage)
// this.initializeTyped();
//     });


//     }
//     // translatedStrings:  string[] = ['sdf','qdfdf','sdfsdf'] ;
//     // loadTranslatedStrings(): void {
//     //   this.loadingTranslations = true;
//     //   // Appel de la méthode de traduction pour obtenir les valeurs traduites
//     //   this.translateService.get(['WELCOME_TITLE1', 'WELCOME_TITLE2', 'WELCOME_TITLE3']).subscribe(translations => {
//     //     this.translatedStrings = [
//     //       translations['WELCOME_TITLE1'],
//     //       translations['WELCOME_TITLE2'],
//     //       translations['WELCOME_TITLE3']
//     //     ];
//     //     this.loadingTranslations = false;
//     //   });

//     //   console.log('Translated Strings:', this.translatedStrings);

//     //   // Initialiser Typed.js
//     //  // this.initializeTyped();
//     // }



//     initializeTyped(): void {
//       console.log('Initializing Typed.js');


//       if (this.typedInstance) {
//         this.typedInstance.destroy();
//       }
//       // Assurez-vous que la classe '.typed' cible correctement votre élément HTML
//       this.typedInstance = new Typed('.typed', {
//         strings: this.str,
//         loop: true,
//         typeSpeed: 100,
//         backSpeed: 50,
//         backDelay: 2000,
//         // onComplete: () => {
//         //   console.log('Typed.js initialization complete');
//         // }
//       });
//     }


}
