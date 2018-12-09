import { Injectable } from '@angular/core';
import { DairyElement } from './dairy-element';

@Injectable({
  providedIn: 'root'
})
export class DairyService {

  // constructor() { }
  private nextId: number;

  constructor() {
    const dairyElements = this.getDairyElements();

    // if no dairyElements, nextId is 0,
    // otherwise set to 1 more than last dairyElement id
    if (dairyElements.length === 0) {
      this.nextId = 0;
    } else {
      const maxId = dairyElements[dairyElements.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  public addDairyElement(text: string): void {
    const dairyElement = new DairyElement(this.nextId, text);
    const dairyElements = this.getDairyElements();
    dairyElements.push(dairyElement);

    // save the dairyElements to local storage
    this.setLocalStorageDairyElements(dairyElements);
    this.nextId++;
  }

  public getDairyElements(): DairyElement[] {
    const localStorageItem = JSON.parse(localStorage.getItem('dairyElements'));
    return localStorageItem == null ? [] : localStorageItem.dairyElements;
  }

  public removeDairyElement(id: number): void {
    let dairyElements = this.getDairyElements();
    dairyElements = dairyElements.filter((dairyElement) => dairyElement.id !== id);
    this.setLocalStorageDairyElements(dairyElements);
  }

  // private function to help save to local storage
  private setLocalStorageDairyElements(dairyElements: DairyElement[]): void {
    localStorage.setItem('dairyElements', JSON.stringify({ dairyElements: dairyElements }));
  }
}
