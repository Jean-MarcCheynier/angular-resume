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

export class Experience {
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
  private skillList: Skill[];

  // Setter
  set startDate(value: string) {
    this._startDate = new Date(value);
  }

  set endDate(value: string | undefined) {
    this._endDate = value ? new Date(value) : undefined;
  }

  private constructor() {
    this.companyImageUrl = '';
    this.company = '';
    this.title = '';
    this.description = { en: '', fr: '' };
    this.location = {
      city: '',
      country: '',
    };
    this.skillList = [];
  }

  static create(props: ExperienceConstructorProps) {
    const instance = new Experience();

    instance.companyImageUrl = props.companyImageUrl;
    instance.company = props.company;
    instance.title = props.title;
    instance.startDate = props.startDate;
    instance.endDate = props.endDate;
    instance.description = props.description;
    instance.location = {
      city: props.location.city,
      country: props.location.country,
    };
    instance.skillList = props.skillList;
    return instance;
  }
}
