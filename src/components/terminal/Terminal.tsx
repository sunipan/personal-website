import { TerminalProps } from './Terminal.types';

export const Terminal = ({ className, children, bodyClassName, variant }: TerminalProps) => {
  return (
    <div className={`${className} ${variant === 'light' ? 'bg-white' : 'bg-light'}`}>
      <div className="mb-3 flex flex-row gap-3">
        <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#FF5F56] transition duration-200 ease-linear hover:opacity-70 hover:opacity-70"></div>
        <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#FFBD2E] transition duration-200 ease-linear hover:opacity-70 hover:opacity-70"></div>
        <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#27C93F] transition duration-200 ease-linear hover:opacity-70"></div>
      </div>
      <div
        className={`border-b-2 ${variant === 'light' ? 'border-gray-200' : 'border-dark'} pt-2`}
      ></div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
};
