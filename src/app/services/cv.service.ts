import { EventEmitter, Injectable } from '@angular/core';
import { Experience } from '../experience/experience.model';
import { EXPERIENCE_ITEMS } from '../experience/experience.constant';
import { Skill } from '../skill/skill.model';
import { SKILL_ITEMS } from '../skill/skill.constants';
import { isBefore } from 'date-fns';
import { LanguageProvider } from './language-provider.service';
import { LevensteinDistanceService } from './levenstein-distance.service';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private _experienceList: Experience[] = [];
  private _skillList: Skill[] = [];

  constructor(
    private languageProvider: LanguageProvider,
    private levensteinDistanceService: LevensteinDistanceService
  ) {
    //fetch data from the server
    this.fetchSkillList();
    this.fetchExperienceList();
    console.log(this.searchSkill('NestJs'));
  }

  private fetchSkillList() {
    const selectableSkillList = [];
    for (const skill of SKILL_ITEMS) {
      const selectableSkill = new Skill(skill);
      selectableSkillList.push(selectableSkill);
    }
    this._skillList = selectableSkillList;
  }

  private fetchExperienceList() {
    const experienceList: Experience[] = [];

    for (const { skillSlugList, ...rest } of EXPERIENCE_ITEMS) {
      const skillList = this.getSkillsBySlugList(skillSlugList);
      const experience = new Experience(
        { skillList, ...rest },
        this.languageProvider
      );

      experienceList.push(experience);
    }
    this._experienceList = experienceList;
  }

  private searchSkill(search: string): any {
    return this._skillList
      .map((skill) => ({
        distance: this.levensteinDistanceService.levensteinDistanceRatio(
          skill.slug,
          search
        ),
        skill,
      }))
      .filter((item) => item.distance > 0.4)
      .sort((a, b) => b.distance - a.distance);
  }

  /*  private searchExperienceBySkillSlug(skillSlug: string): Experience[] {} */

  getSkillsBySlugList(slugList: string[]): Skill[] {
    return this._skillList.filter((skill) => slugList.includes(skill.slug));
  }

  get experienceList() {
    return this._experienceList.sort((a, b) => {
      return isBefore(b.startDate, a.startDate) ? -1 : 1;
    });
  }

  get skillList() {
    return this._skillList;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T = object> = new (...args: any[]) => T;

interface ISelectable {
  selected: boolean;
  selectedChange: EventEmitter<boolean>;
  observe: (selectable: ISelectable | ISelectable[]) => void;

  toggleSelect(): void;
}

export function Selectable<TBase extends Constructor>(
  Base: TBase
): TBase & Constructor<ISelectable> {
  return class extends Base implements ISelectable {
    private _selected: boolean = false;
    selectedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    innerSelectable: ISelectable[] = [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);
      this.innerSelectable = [];
    }

    get selected() {
      return this._selected;
    }

    set selected(value: boolean) {
      this._selected = value;
      this.selectedChange.emit(this.selected);
    }

    toggleSelect() {
      this.selected = !this.selected;
    }

    observe(selectable: ISelectable | ISelectable[]) {
      if (!Array.isArray(selectable)) {
        selectable = [selectable];
      }

      if (
        Array.isArray(this.innerSelectable) &&
        this.innerSelectable.length > 0
      ) {
        for (const item of this.innerSelectable) {
          item.selectedChange.unsubscribe();
        }
      }
      this.innerSelectable = [...selectable];
      for (const item of this.innerSelectable) {
        item.selectedChange.subscribe((selected: boolean) => {
          this.selected = selected;
        });
      }
    }
  };
}
