import { EventEmitter, Injectable } from '@angular/core';
import { Experience } from '../experience/experience.model';
import { EXPERIENCE_ITEMS } from '../experience/experience.constant';
import { Skill } from '../skill/skill.model';
import { SKILL_ITEMS } from '../skill/skill.constants';
import { isBefore } from 'date-fns';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private _experienceList: Experience[] = [];
  private _skillList: Skill[] = [];

  constructor(private translate: TranslateService) {
    //fetch data from the server
    this.fetchSkillList();
    this.fetchExperienceList();
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
      const experience = new Experience({ skillList, ...rest }, this.translate);

      experienceList.push(experience);
    }
    this._experienceList = experienceList;
  }

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

type Constructor<T = {}> = new (...args: any[]) => T;

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
