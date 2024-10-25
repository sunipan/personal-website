import { ReactNode } from 'react';

export type ExperienceProps = {
  id?: string;
  title: string;
  src: string;
  width: number;
  height: number;
  gradientColour: string;
  imageBg?: string;
  children?: ReactNode;
  href: string;
  childWrapperClass?: string;
  underlined?: boolean;
  project?: boolean;
  role: string;
  description?: string;
  date: string;
};
