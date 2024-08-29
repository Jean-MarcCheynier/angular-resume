import { Selectable } from '../services/cv.service';

export enum Proficiency {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
}

export interface ISkill {
  slug: string;
  proficiency: Proficiency;
  description?: string;
}

class BaseSkill implements ISkill {
  slug: string;
  proficiency: Proficiency;
  description?: string;

  constructor(props: ISkill) {
    this.slug = props.slug;
    this.proficiency = props.proficiency;
    this.description = props.description;
  }
}

export class Skill extends Selectable(BaseSkill) {
  constructor(props: ISkill) {
    super(props);
  }
}
