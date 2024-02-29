import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import logo_horizontal from '@/public/logo_horiziotal.webp';
import Image from 'next/image';
import {Navbar} from "@/components/NavBar";

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'ADDicted!',
  description: 'Сайт панк-рок группы ADDicted!',
  applicationName:'ADDicted!',
  keywords:['Аддиктед','панк рок', 'Рыбинск','ADDicted!'],
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/light_icon.png',
        href: '/light_icon.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/dark_icon.png',
        href: '/dark_icon.png',
      },
    ],
  },
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
