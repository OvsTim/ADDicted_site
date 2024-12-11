import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React, { Suspense } from 'react';
import logo_horizontal from '@/public/logo_horiziotal.webp';
import Image from 'next/image';
import {Navbar} from "@/components/NavBar";
import Script from "next/script";
import YandexMetrika from "@/components/YandexMetrica";

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
      <Script id="metrika-counter" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym(99163373, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`
        }
      </Script>
      <Suspense fallback={<></>}>
        <YandexMetrika />
      </Suspense>
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
