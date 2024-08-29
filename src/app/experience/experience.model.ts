import { Observable } from 'rxjs';
import { Selectable } from '../services/cv.service';
import { Skill } from '../skill/skill.model';

export interface ExperienceConstructorProps {
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

class BaseExperience {
  companyImageUrl: string;
  company: string;
  title: string;
  private _startDate!: Date;
  private _endDate?: Date;
  private description: { en: string; fr: string };
  private location: {
    city: string;
    country: string;
  };
  private _skillList: Skill[] = [];

  get skilList(): Skill[] {
    return this._skillList;
  }

  // Setter
  set startDate(value: string) {
    this._startDate = new Date(value);
  }

  set skillList(value: Skill[]) {
    this._skillList = value;
  }

  set endDate(value: string | undefined) {
    this._endDate = value ? new Date(value) : undefined;
  }

  constructor(props: ExperienceConstructorProps) {
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
  }
}

export class Experience extends Selectable(BaseExperience) {
  constructor(props: ExperienceConstructorProps) {
    super(props);
  }

  override set skillList(value: Skill[]) {
    super.skillList = value;
    this.observe(value);
  }
}
