import { ReactNode } from 'react';

export type ExperienceProps = {
  title: string;
  src: string;
  width: number;
  height: number;
  gradientColour: string;
  imageBg?: string;
  children?: ReactNode;
  href: string;
  childWrapperClass?: string;
  headerText: string;
  underlined?: boolean;
  project?: boolean;
  role: string;
  description?: string;
  date: string;
};
