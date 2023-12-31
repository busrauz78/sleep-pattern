import { Inter } from 'next/font/google';
import Head from 'next/head';
import React from 'react';
import Menu from './menu';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Chronotype Doctor</title>
        <meta name="description" content="Everything about chronotype" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} mx-10`}>
        <Menu />
        {children}
      </main>
    </>
  );
}
