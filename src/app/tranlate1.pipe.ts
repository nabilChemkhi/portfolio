import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import i18next from 'i18next';

@Pipe({
  name: 'translate1',
  pure: false,
})
export class Translate1Pipe implements PipeTransform {
  constructor(private _ref: ChangeDetectorRef) {}

  transform(key: string): string | null {
    try {
      const translation = i18next.t(key);

      if (!translation) {
        console.error(`Translation not found for key: ${key}`);
        // You could log this error to a service or analytics tool
        return key; // Fallback to original key or a default value
      }

      this._ref.markForCheck(); // Manually trigger change detection

      return translation;
    } catch (error) {
      console.error(`Error translating key ${key}:`, error);
      return key; // Fallback to original key or a default value
    }
  }
}
