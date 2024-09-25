import { Observable } from 'rxjs';
import { Selectable } from '../services/cv.service';
import { Skill } from '../skill/skill.model';
import { de } from 'date-fns/locale';
import { TranslateService } from '@ngx-translate/core';
import { ExperienceItemData, MultilingualContent } from './experience.constant';
import {
  LanguageProvider,
  LanguageProviderInterface,
} from '../services/language-provider.service';

export type WorkArrangement = 'remote' | 'onsite' | 'hybrid';

export interface ExperienceConstructorProps {
  title: MultilingualContent<string>;
  companyImageUrl: string;
  companyProfileUrl?: string;
  company: string;
  workArrangement: WorkArrangement;

  startDate: string;
  endDate?: string;
  description: MultilingualContent<string>;
  location: {
    city: string;
    country: string;
  };
  skillList: Skill[];
}

class BaseExperience {
  companyImageUrl: string;
  company: string;
  workArrangement: WorkArrangement;
  private _title!: MultilingualContent<string>;
  private _startDate!: Date;
  private _endDate?: Date;
  private _description!: MultilingualContent<string>;
  location: {
    city: string;
    country: string;
  };
  private _skillList: Skill[] = [];

  private languageProvider!: LanguageProviderInterface;

  // Getter
  get startDate(): Date {
    return this._startDate;
  }

  get endDate(): Date | undefined {
    return this._endDate;
  }

  get skilList(): Skill[] {
    return this._skillList;
  }

  get title(): string {
    return this._title[this.languageProvider.getCurrentLang()];
  }

  get description(): string {
    return this._description[this.languageProvider.getCurrentLang()];
  }

  // Setter
  set title(value: MultilingualContent<string>) {
    this._title = value;
  }
  set description(value: MultilingualContent<string>) {
    this._description = value;
  }

  set startDate(value: string) {
    this._startDate = new Date(value);
  }

  set skillList(value: Skill[]) {
    this._skillList = value;
  }

  set endDate(value: string | undefined) {
    this._endDate = value ? new Date(value) : undefined;
  }

  constructor(
    props: ExperienceConstructorProps,
    languageProvider: LanguageProviderInterface
  ) {
    this.companyImageUrl = props.companyImageUrl;
    this.company = props.company;
    this.title = props.title;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.description = props.description;
    this.location = {
      city: props.location.city,
      country: props.location.country,
    };
    this.skillList = props.skillList;

    this.languageProvider = languageProvider;
    this.workArrangement = props.workArrangement;
  }
}

export class Experience extends Selectable(BaseExperience) {
  constructor(
    props: ExperienceConstructorProps,
    languageProvider: LanguageProviderInterface
  ) {
    super(props, languageProvider);
  }

  override set skillList(value: Skill[]) {
    super.skillList = value;
    this.observe(value);
  }
}
