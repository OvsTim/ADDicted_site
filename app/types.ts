import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface AlbumData {
  image: StaticImport;
  linkVk: string;
  linkYm: string;
  slug:string;
}

export interface ConcertData {
  location: string;
  city: string;
  date: string;
  vkLink: string;
  ticketsLink: string;
  slug:string;
}

export interface ContactData {
  youtube: string;
  vk: string;
  tg: string;
  emailLink: string;
  phoneLink: string;
  raider:string;
}
