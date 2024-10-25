export type ExperienceProps = {
  id?: string;
  companyName: string;
  companyKey: CompanyKey;
  src: string;
  width: number;
  height: number;
  bulletPoints: string[];
  href: string;
  jobTitle: string;
  date: string;
};

export enum CompanyKey {
  Rave = 'rave',
  RentalHunt = 'rentalhunt',
  Minga = 'minga',
  Atomic47 = 'atomic47',
  Jusaves = 'jusaves',
}
