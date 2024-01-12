import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import logo_horizontal from '@/public/logo_horiziotal.png';
import Image from 'next/image';
import {Navbar} from "@/components/NavBar";

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'ADDicted!',
  description: 'Сайт панк-рок группы ADDicted!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <div className={'bg-black'}>
          <Image
            className={'w-full bg-black p-5  md:hidden '}
            src={logo_horizontal}
            alt={'logo'}
          />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
