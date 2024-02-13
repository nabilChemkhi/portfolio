
import { ChangeDetectorRef, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import i18next from 'i18next';

import XHR from 'i18next-xhr-backend';
//import { initializeI18n } from '@angular/localize/init';


// import  initializeI18n  from '@angular/localize/init';
//import { HttpBackend } from 'i18next-http-backend';

// import i18next from 'i18next';
// import  LocalStorageBackend  from 'i18next-localstorage-backend';
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


  this.initI18next()
 }

  initI18next() {
//   i18next
//   .use(XHR)
//   .init({
//     lng: 'en',
//     fallbackLng: 'en',
//     backend: {
//       loadPath: 'assets/i18n/{{lng}}.json',
//     },
//   });

// initializeI18n({
//   translations: 'assets/i18n',
//   defaultLocale: 'en'
// });


// i18next
//   .use(XHR)
//   .init({
//     lng: 'en',
//     fallbackLng: 'en',
//     backend: {
//       loadPath: 'assets/i18n/{{lng}}.json',
//     },
//   });

// i18next
//   .use(I18NextLocalStorageBackend)
//   .init({
//     lng: 'en',
//     fallbackLng: 'en',
//     backend: {
//       loadPath: 'assets/i18n/{{lng}}.json',
//       savePath: 'assets/i18n/{{lng}}.json',
//     },
//   });

// i18next
//   .use(LocalStorageBackend)
//   .init({
//     lng: 'en',
//     fallbackLng: 'en',
//     backend: {
//       loadPath: 'assets/i18n/{{lng}}.json',
//       savePath: 'assets/i18n/{{lng}}.json',
//     },
//   });


// const httpBackend = new HttpBackend();

// httpBackend.loadPath = 'assets/i18n/{{lng}}.json';

// i18next
//   .use(HttpBackend)
//   .init({
//     lng: 'en',
//     fallbackLng: 'en',
//     backend: {
//       loadPath: 'assets/i18n/{{lng}}.json',
//     },
//   });

i18next
  .use(XHR)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    backend: {
      loadPath: 'assets/i18n/{{lng}}.json',
      savePath: 'assets/i18n/{{lng}}.json',
    },
  });


  console.log('loadPath:', '/portfolio/assets/i18n/{{lng}}.json');

 }


switchLanguage(language: string) {

  //console.log("Switching language to:", language);
  this.actvLanguage = language;
 // console.log("Active language now:", this.actvLanguage);
  this.languageService.setLanguage(language);
  this.languageService.setActiveLanguage(language);
  console.log('loadPathswith:', 'assets/i18n/{{lng}}.json');
  //private cdr: ChangeDetectorRef
  // this.cdr.detectChanges();
}



}
