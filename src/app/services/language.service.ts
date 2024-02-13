import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) {}

  setLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

  getLanguage() {
    return localStorage.getItem('language') || 'en'; // default language
  }

  initializeLanguage() {
    const language = this.getLanguage();
    this.translate.use(language);
  }

  private activeLanguageSubject = new BehaviorSubject<string>('en');
  public activeLanguage$ = this.activeLanguageSubject.asObservable();

  setActiveLanguage(language: string): void {
    this.activeLanguageSubject.next(language);
  }
}

