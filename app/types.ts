import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface AlbumData {
  image: StaticImport;
  linkVk: string;
  linkYm: string;
}

export interface ConcertData {
  image: StaticImport;
  location: string;
  city: string;
  date: string;
  vkLink: string;
  ticketsLink: string;
}

export interface ContactData {
  youtube: string;
  vk: string;
  tg: string;
  emailLink: string;
  phoneLink: string;
}
