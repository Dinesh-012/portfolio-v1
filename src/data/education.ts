export type EducationItem = {
  id: string;
  institution: string;
  degree: string;
  period: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    id: "kcet",
    institution: "Kamaraj College of Engineering and Technology",
    degree: "B.Tech, Artificial Intelligence and Data Science",
    period: "2021 – 2025",
    detail: "CGPA: 7.72",
  },
  {
    id: "HSC",
    institution: "K.V.S Higer Secondary School",
    degree: "HSC",
    period: "2020 – 2021",
    detail: "Percentage: 86.1",
  },
  {
    id: "SSLC",
    institution: "K.V.S Higer Secondary School",
    degree: "SSLC",
    period: "2018 – 2019",
    detail: "Percentage: 81.2",
  },
];
