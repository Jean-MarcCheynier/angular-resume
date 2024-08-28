import { DegreeType, EducationItem } from './education.model';

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    institution: 'education.master.institution',
    degree: { type: DegreeType.MASTERS, name: 'education.master.degree' },
    fieldOfStudy: 'education.master.fieldOfStudy',
    startDate: '2011-09-01',
    endDate: '2014-09-01',
    description: 'education.master.description',
    imageUrl: '',
  },
  {
    institution: 'education.bachelor.institution',
    degree: { type: DegreeType.BACHELORS, name: 'education.bachelor.degree' },
    fieldOfStudy: 'education.bachelor.fieldOfStudy',
    startDate: '2009-09-01',
    endDate: '2011-09-01',
    description: 'education.bachelor.description',
    imageUrl: '',
  },
  {
    institution: 'education.baccalaureate.institution',
    degree: {
      type: DegreeType.BACCALAUREATE,
      name: 'education.baccalaureate.degree',
    },
    fieldOfStudy: 'education.baccalaureate.fieldOfStudy',
    startDate: '2009-09-01',
    endDate: '2011-09-01',
    description: 'education.baccalaureate.description',
    imageUrl: '',
  },
];
