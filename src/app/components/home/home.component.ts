
import { ChangeDetectorRef, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
//import i18next from 'i18next';


//import { initializeI18n } from '@angular/localize/init';


// import  initializeI18n  from '@angular/localize/init';
//import  HttpBackend  from 'i18next-http-backend';

// import i18next from 'i18next';
// import  LocalStorageBackend  from 'i18next-localstorage-backend';

//import HttpBackend from 'i18next-http-backend';
// import * as i18next from 'i18next';
// import XHR from 'i18next-xhr-backend';


import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
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

  const xhr = new XHR(null, this.options);
  console.log('xhrloging   ' + xhr )
  console.log(' xhr.options  ' +  xhr.options , )
  console.log('xhr.loadUrl  ' + xhr.loadUrl )
 }
 options={
  loadPath: '/portfolio/assets/i18n/{{lng}}.json',
  // path to post missing resources
  addPath: '/portfolio/assets/i18n/{{lng}}.json'
}

translate1(key: string) {
  console.log('key' +key , i18next.t(key))
  return i18next.t(key);
}



  initI18next() {

      // Initialize i18next
      i18next
         .use(XHR)

         .init({
           lng: 'fr',
           fallbackLng: 'en',
          // loadPath: '/assets/i18n/{{lng}}.json',
        //   savePath: '/assets/i18n/{{lng}}.json',
        backend: this.options,
        });
/******************* */
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


//const httpBackend = new HttpBackend();

 //httpBackend.loadPath = 'assets/i18n/{{lng}}.json';

// i18next
//   .use(HttpBackend)
//   .init({
//     lng: 'en',
//     fallbackLng: 'en',
//     backend: {
//       loadPath: 'assets/i18n/{{lng}}.json',
//     },
//   });
//debugger;
// i18next
//   .use(XHR)
//   .init({
//     lng: 'en',
//     fallbackLng: 'en',
//     backend: {
//       loadPath: '/portfolio/assets/i18n/{{lng}}.json',
//       //savePath: '/portfolio/assets/i18n/{{lng}}.json',

//     },
//   });


  // const httpBackend = new HttpBackend({
  //   loadPath: '/portfolio/assets/i18n/{{lng}}.json',
  // });



  // i18next
  //   .use(httpBackend)
  //   // ... other i18next options
  //   .init(

  //   );


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
