// src/app/experience.constants.ts

type ExperienceItemData = {
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
  skillSlugList: string[];
};

export const EXPERIENCE_ITEMS: ExperienceItemData[] = [
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
    skillSlugList: ['angular'], // Example skills
    companyImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkb9aAqZUoqaoZaPhHfyhm-nHAN9yK5Mjb6A&s',
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
    skillSlugList: [], // Example skills
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
    skillSlugList: [], // Example skills
    companyImageUrl: 'https://example.com/company-c-logo.png',
  },
];
