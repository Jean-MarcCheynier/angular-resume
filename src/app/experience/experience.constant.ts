// src/app/experience.constants.ts

import { Lang } from '../services/language-provider.service';
import { ExperienceConstructorProps } from './experience.model';

export type MultilingualContent<V> = Record<Lang, V>;

export type ExperienceItemData = Omit<
  ExperienceConstructorProps,
  'skillList'
> & {
  skillSlugList: string[];
};

export const EXPERIENCE_ITEMS: ExperienceItemData[] = [
  {
    company: 'Masteos',
    // Example skills
    companyImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkb9aAqZUoqaoZaPhHfyhm-nHAN9yK5Mjb6A&s',

    companyProfileUrl: 'https://www.masteos.com/',

    description: {
      en: '• Participated in the development of the mobile app of Masteos (real estate’s search, investment simulation, communication and project follow up…): React Native • Participated in the development of a custom admin app in co-creation with the real estate hunters: React Admin with HubSpot integrations • Test Coverage Improvement: Significantly increased test coverage by: Implementing end-to-end (E2E) backend tests. Adopting an atomic design and component/hooks testing strategy for the frontend. Automating frontend E2E tests using Cypress and later Detox.',
      fr: 'Développé et maintenu des applications web utilisant Angular et Node.js.',
    },

    endDate: '2024-06-29',

    location: {
      city: 'Paris',
      country: 'France',
    },

    skillSlugList: ['angular'],

    startDate: '2022-02-01',
    title: {
      en: 'Software Engineer fullstack developer - React Native React Admin',
      fr: 'Développeur fullstack React Native React Admin',
    },
    workArrangement: 'remote',
  },
  {
    company: 'Fujitsu Belgium',
    companyImageUrl:
      'https://media.licdn.com/dms/image/v2/D4D0BAQFyQiJPlVTNoA/company-logo_200_200/company-logo_200_200/0/1721235064307/fujitsu_logo?e=1733356800&v=beta&t=ZvUtqvp6KuXRLXIEbQDVVkL7xsOrvvPJhJRgTHoLHww',
    description: {
      en: 'Worked on various frontend projects using React and Redux.',
      fr: 'Travaillé sur divers projets frontend utilisant React et Redux.',
    },
    endDate: '2021-08-01',
    location: {
      city: 'Brussels',
      country: 'Belgium',
    },
    skillSlugList: [],
    startDate: '2019-04-01',
    title: {
      en: 'Software Engineer fullstack developer - react express / angular express SAP CAI',
      fr: 'Développeur fullstack react express / angular express SAP CAI',
    },
    workArrangement: 'hybrid',
  },
  {
    company: 'Aviva France',
    // Example skills
    companyImageUrl:
      'https://media.licdn.com/dms/image/v2/D4E0BAQEDov-ZkIgdpw/company-logo_100_100/company-logo_100_100/0/1715850190053/aviva_plc_logo?e=1733356800&v=beta&t=fYt3XiQugdJPW0XfXWR24JGns4r22eTPNgDcIO4vLxo',

    description: {
      en: '• Participated in the development of Aviva France\'s web portal "Aviva & Moi" to ensure GDPR compliance and merge digital offers.• Created the "Quote center" web portal for Aviva\'s prospects to enhance user experience.• Worked on UX design for the car fleet insurance portal.',
      fr: 'Implémenté des APIs RESTful et des microservices utilisant Spring Boot.',
    },

    endDate: '2019-02-01',

    location: {
      city: 'Courbevoie',
      country: 'France',
    },

    skillSlugList: [],

    startDate: '2017-04-01',
    title: {
      en: "'Software Engineer fullstack developer - Angular Java',",
      fr: 'Développeur fullstack Angular Java',
    },
    workArrangement: 'hybrid',
  },
];
