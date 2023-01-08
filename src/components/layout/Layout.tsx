import { LayoutProps } from './Layout.types';
import { Footer } from '../Footer/Footer';
import Head from 'next/head';
import { NavBar } from '../nav/NavBar';

export const Layout = ({ children, className, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ? `Sebi Unipan | ${title}` : 'Sebi Unipan'}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={className}>
        <NavBar />
        {children}
      </main>
      <Footer />
    </>
  );
};
