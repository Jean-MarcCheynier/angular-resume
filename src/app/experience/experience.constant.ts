// src/app/experience.constants.ts

import { SKILL_ITEMS } from '../skill/skill.constants';
import { ExperienceConstructorProps } from './experience.model';

export const EXPERIENCE_ITEMS: ExperienceConstructorProps[] = [
  {
    company: 'Company A',
    title: 'Software Engineer',
    startDate: '2020-01-01',
    endDate: '2022-01-01',
    description: {
      en: 'Developed and maintained web applications using Angular and Node.js.',
      fr: 'Développé et maintenu des applications web utilisant Angular et Node.js.',
    },
    location: {
      city: 'New York',
      country: 'USA',
    },
    skillList: [SKILL_ITEMS[0], SKILL_ITEMS[1]], // Example skills
    companyImageUrl: 'https://example.com/company-a-logo.png',
  },
  {
    company: 'Company B',
    title: 'Frontend Developer',
    startDate: '2018-06-01',
    description: {
      en: 'Worked on various frontend projects using React and Redux.',
      fr: 'Travaillé sur divers projets frontend utilisant React et Redux.',
    },
    location: {
      city: 'San Francisco',
      country: 'USA',
    },
    skillList: [SKILL_ITEMS[2], SKILL_ITEMS[3]], // Example skills
    companyImageUrl: 'https://example.com/company-b-logo.png',
  },
  {
    company: 'Company C',
    title: 'Backend Developer',
    startDate: '2016-09-01',
    endDate: '2018-05-01',
    description: {
      en: 'Implemented RESTful APIs and microservices using Spring Boot.',
      fr: 'Implémenté des APIs RESTful et des microservices utilisant Spring Boot.',
    },
    location: {
      city: 'Austin',
      country: 'USA',
    },
    skillList: [SKILL_ITEMS[4], SKILL_ITEMS[5]], // Example skills
    companyImageUrl: 'https://example.com/company-c-logo.png',
  },
];
