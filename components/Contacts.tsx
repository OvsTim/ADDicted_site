import { ImVk } from 'react-icons/im';
import { ImYoutube } from 'react-icons/im';
import { ImTelegram } from 'react-icons/im';
import { ContactData } from '@/app/types';
export const Contacts = () => {
  const contacts: ContactData = {
    vk: 'https://vk.com/addicted.gang',
    youtube: 'https://www.youtube.com/@addicted8546',
    tg: 'https://t.me/addictedlive',
    emailLink: 'mailto:rainembrace@mail.ru',
    phoneLink: 'tel:+79119798814',
    raider:'https://docs.google.com/document/d/1jWVxVenyVeW3gWatBCjzndXiArzbm_3qGJqZtR9fdvk/edit?usp=sharing',
    bytRaider:'https://docs.google.com/document/d/1bDjI9jHifUF8NpN-SlWZxlaoqrhDrxy0lF9HDxt3kj4/edit?usp=sharing'
  };

  return (
      <div className={'flex w-full flex-col place-items-center justify-center'}>
      <span className={'text-2xl font-semibold uppercase text-white'}>
        Наши соцсети:
      </span>
          <div
              className={
                  'bg mb-5 mt-10 flex h-fit w-2/3 flex-row justify-evenly md:w-1/3'
              }
          >
              <a
                  id={'vk'}
                  className={'text-white hover:text-gray-300'}
                  href={contacts.vk}
                  aria-label="vk link"
                  target={'_blank'}
                  rel='noopener noreferrer'
              >
                  <ImVk size={56}/>
              </a>
              <a
                  id={'telegram'}
                  aria-label="telegram link"
                  className={'text-white hover:text-gray-300'}
                  href={contacts.tg}
                  target={'_blank'}
                  rel='noopener noreferrer'
              >
                  <ImTelegram size={56}/>
              </a>
              <a
                  id={'youtube'}
                  aria-label="youtube link"
                  className={'text-white hover:text-gray-300'}
                  href={contacts.youtube}
                  target={'_blank'}
                  rel='noopener noreferrer'
              >
                  <ImYoutube size={56}/>
              </a>
          </div>
          <span
              className={'text-center text-2xl font-semibold uppercase text-white mt-20'}
          >
        По вопросам организации концертов:
      </span>
          <div
              className={
                  'my-10 flex w-1/2 flex-col place-items-center space-y-10 md:flex-row md:justify-evenly md:space-y-0'
              }
          >
              <a
                  id={'contactPhone'}
                  href={contacts.phoneLink}
                  target={'_blank'}
                  rel='noopener noreferrer'
                  className={
                      'flex flex-row place-items-center justify-around border-2 border-white py-3 uppercase text-white hover:bg-white hover:text-black'
                  }
              >
                  <span className={'mx-7'}>Позвонить</span>
              </a>
              <a
                  id={'contactEmail'}
                  href={contacts.emailLink}
                  target={'_blank'}
                  rel='noopener noreferrer'
                  className={
                      'flex flex-row place-items-center justify-around border-2 border-white py-3 uppercase text-white hover:bg-white hover:text-black'
                  }
              >
                  <span className={'mx-7'}>Написать</span>
              </a>
          </div>
          <a
              id={'contactRaider'}
              href={contacts.raider}
              target={'_blank'}
              rel='noopener noreferrer'
              className={
                  'mt-20 w-1/2 px-10 flex flex-row place-items-center justify-center border-2 border-white py-3 uppercase text-white text-center hover:bg-white hover:text-black md:w-1/4'
              }
          >
              <span className={'mx-7 my-1'}>Технический райдер</span>
          </a>
          <a
              id={'bytRaider'}
              href={contacts.bytRaider}
              target={'_blank'}
              rel='noopener noreferrer'
              className={
                  'mt-20 w-1/2 px-10 flex flex-row place-items-center justify-center border-2 border-white py-3 uppercase text-white text-center hover:bg-white hover:text-black md:w-1/4'
              }
          >
              <span className={'mx-7 my-1'}>Бытовой райдер</span>
          </a>
      </div>
  );
};
