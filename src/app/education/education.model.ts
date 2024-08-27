export interface EducationItem {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string; // Consider using a Date object if you need to perform date operations
  endDate: string; // Consider using a Date object if you need to perform date operations
  description: string;
  imageUrl: string;
}