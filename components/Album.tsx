import Image from "next/image";
import cover from '@/public/album/rave.jpg'
import vk from '@/public/music/vk.png'
import yandex from '@/public/music/yandex.png'
import Link from "next/link";

const Album = () => {


    return (
        <div className={'w-full h-[70svh] relative mt-10 bg-'}>
            <Image className={'object-fill h-[70svh] w-full blur-lg' } src={cover} alt={'cover'}/>
            <div
                className={'h-full w-full absolute top-0 left-0 flex flex-col place-items-center justify-evenly md:flex-row'}>
                <Image className={'w-1/2 lg:w-1/3 aspect-square '} src={cover} alt={'cover'}/>
                <div
                    className={' w-1/3 aspect-square flex flex-col justify-between md:justify-evenly '}>
                    <Link href={''}>
                        <Image src={vk} alt={'vk'}/>
                    </Link>
                    <Link href={''}>
                        <Image src={yandex} alt={'yandex'}/>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Album
