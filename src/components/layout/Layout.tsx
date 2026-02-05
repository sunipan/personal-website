import Head from 'next/head';
import type { LayoutProps } from './Layout.types';

export const Layout = ({ children, className, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ? `Sebi Unipan | ${title}` : 'Sebi Unipan'}</title>
        <meta name="description" content="Sebi Unipan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={className}>{children}</main>
    </>
  );
};
