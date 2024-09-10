import { DegreeType, EducationItem } from './education.model';

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: { name: 'education.master.degree', type: DegreeType.MASTERS },
    description: 'education.master.description',
    endDate: '2014-09-01',
    fieldOfStudy: 'education.master.fieldOfStudy',
    imageUrl: '',
    institution: 'education.master.institution',
    startDate: '2011-09-01',
  },
  {
    degree: { name: 'education.bachelor.degree', type: DegreeType.BACHELORS },
    description: 'education.bachelor.description',
    endDate: '2011-09-01',
    fieldOfStudy: 'education.bachelor.fieldOfStudy',
    imageUrl: '',
    institution: 'education.bachelor.institution',
    startDate: '2009-09-01',
  },
  {
    degree: {
      name: 'education.baccalaureate.degree',
      type: DegreeType.BACCALAUREATE,
    },
    description: 'education.baccalaureate.description',
    endDate: '2011-09-01',
    fieldOfStudy: 'education.baccalaureate.fieldOfStudy',
    imageUrl: '',
    institution: 'education.baccalaureate.institution',
    startDate: '2009-09-01',
  },
];
