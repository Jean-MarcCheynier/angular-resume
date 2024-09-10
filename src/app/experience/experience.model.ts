import { Observable } from 'rxjs';
import { Selectable } from '../services/cv.service';
import { Skill } from '../skill/skill.model';
import { de } from 'date-fns/locale';
import { TranslateService } from '@ngx-translate/core';

export interface ExperienceConstructorProps {
  companyProfileUrl?: string;
  companyImageUrl: string;
  company: string;
  title: string;
  startDate: string;
  endDate?: string;
  description: {
    en: string;
    fr: string;
  };
  location: {
    city: string;
    country: string;
  };
  skillList: Skill[];
}

type LanguageProvider = {
  currentLang: string;
};

class BaseExperience {
  companyImageUrl: string;
  company: string;
  title: string;
  private _startDate!: Date;
  private _endDate?: Date;
  private _description!: Record<string, string>;
  private location: {
    city: string;
    country: string;
  };
  private _skillList: Skill[] = [];

  private languageProvider?: LanguageProvider;

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

  get description(): string {
    const lang = this.languageProvider?.currentLang || 'en';
    return this._description[lang];
  }

  // Setter
  set description(value: { en: string; fr: string }) {
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
    LanguageProvider?: LanguageProvider
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

    this.languageProvider = LanguageProvider;
  }
}

export class Experience extends Selectable(BaseExperience) {
  constructor(
    props: ExperienceConstructorProps,
    languageProvider?: LanguageProvider
  ) {
    super(props, languageProvider);
  }

  override set skillList(value: Skill[]) {
    super.skillList = value;
    this.observe(value);
  }
}
