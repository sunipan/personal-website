import { cn } from '../../lib/utils';
import type { TerminalProps } from './Terminal.types';

export const Terminal = ({ headerText, bodyText, variant }: TerminalProps) => {
  return (
    <div
      className={cn('h-full w-full rounded-xl p-5', {
        'bg-white': variant === 'light',
        'bg-light': variant === 'dark',
      })}
    >
      <div
        className={cn('flex flex-row gap-3 border-b-2 pb-4', {
          'border-neutral-600': variant === 'dark',
        })}
      >
        <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#FF5F56] transition duration-200 ease-linear hover:opacity-70"></div>
        <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#FFBD2E] transition duration-200 ease-linear hover:opacity-70"></div>
        <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#27C93F] transition duration-200 ease-linear hover:opacity-70"></div>
      </div>
      <div className="-mt-4 flex h-full flex-col items-center justify-center gap-10">
        <h1
          className={cn('w-full text-center text-4xl font-bold', {
            'text-black': variant === 'light',
            'text-white': variant === 'dark',
          })}
        >
          {headerText}
        </h1>
        <div
          className={cn('max-w-lg text-left font-light xs:text-lg md:text-[24px]', {
            'text-black': variant === 'light',
            'text-white': variant === 'dark',
          })}
        >
          {bodyText}
        </div>
      </div>
    </div>
  );
};
