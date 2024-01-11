import Image from 'next/image';
import cover from '@/public/album/rave.jpg';
import ya_uhoju from '@/public/album/ya_uhoju.jpeg';
import vk from '@/public/music/vk.png';
import yandex from '@/public/music/yandex.png';
import Link from 'next/link';

const Album = () => {
    return (
        <div className={'flex flex-col'}>
            <div className={'relative mt-10 h-[70svh] w-full lg:w-[1300px]'}>
                <Image
                    className={'h-[70svh] w-full object-fill blur-lg lg:w-[1300px]'}
                    src={cover}
                    alt={'cover'}
                />
                <div
                    className={
                        'absolute left-0 top-0 flex h-full w-full flex-col place-items-center justify-evenly md:flex-row'
                    }
                >
                    <Image
                        className={'aspect-square w-1/2 lg:w-1/3 '}
                        src={cover}
                        alt={'cover'}
                    />
                    <div
                        className={
                            ' flex aspect-square w-1/3 flex-col justify-center space-y-5 md:justify-evenly '
                        }
                    >
                        <Link href={''}
                              target={'_blank'}
                              rel='noopener noreferrer'>
                            <Image src={vk} alt={'vk'}/>
                        </Link>
                        <Link href={''}
                              target={'_blank'}
                              rel='noopener noreferrer'>
                            <Image src={yandex} alt={'yandex'}/>
                        </Link>
                    </div>
                </div>
            </div>


            <div className={'relative mt-10 h-[70svh] w-full lg:w-[1300px]'}>
                <Image
                    className={'h-[70svh] w-full object-fill blur-lg lg:w-[1300px]'}
                    src={ya_uhoju}
                    alt={'cover'}
                />
                <div
                    className={
                        'absolute left-0 top-0 flex h-full w-full flex-col place-items-center justify-evenly md:flex-row'
                    }
                >
                    <Image
                        className={'aspect-square w-1/2 lg:w-1/3 '}
                        src={ya_uhoju}
                        alt={'cover'}
                    />
                    <div
                        className={
                            ' flex aspect-square w-1/3 flex-col justify-center space-y-5 md:justify-evenly '
                        }
                    >
                        <Link href={''}
                              target={'_blank'}
                              rel='noopener noreferrer'
                        >
                            <Image src={vk} alt={'vk'}/>
                        </Link>
                        <Link href={''}
                              target={'_blank'}
                              rel='noopener noreferrer'
                        >
                            <Image src={yandex} alt={'yandex'}/>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Album;
