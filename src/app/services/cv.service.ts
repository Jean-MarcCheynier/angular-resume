import { Injectable } from '@angular/core';
import { Experience } from '../experience/experience.model';
import { EXPERIENCE_ITEMS } from '../experience/experience.constant';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private _experienceList: BehaviorSubject<SelectableItem<Experience>[]> =
    new BehaviorSubject<SelectableItem<Experience>[]>([]);

  constructor() {
    //fetch data from the server
    this.fetchExperienceList();
  }

  private fetchExperienceList() {
    const selectableExperienceList = [];
    for (const xp of EXPERIENCE_ITEMS) {
      const selectableExperience = new SelectableItem(Experience.create(xp));
      selectableExperienceList.push(selectableExperience);
    }
    this._experienceList.next(selectableExperienceList);
  }

  get experienceList() {
    return this._experienceList;
  }
}

export class SelectableItem<T> {
  private item: T;
  private _selected: boolean = false;
  constructor(public value: T) {
    this.item = value;
  }

  get selected() {
    return this._selected;
  }

  toggleSelect() {
    console.log('selected');
    this._selected = !this._selected;
  }
}
