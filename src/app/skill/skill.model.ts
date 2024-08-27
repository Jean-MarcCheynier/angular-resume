export enum Proficiency {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
}

export interface Skill {
  name: string;
  proficiency: Proficiency;
  description?: string;
}
