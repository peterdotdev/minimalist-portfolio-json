// src/cv.d.ts
declare module "src/cv.json" {
  export const education: {
    institution: string;
    startDate: string;
    endDate: string | null;
    area: string;
  }[];
}
