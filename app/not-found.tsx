import Link from 'next/link'

export default function NotFound() {
    return (
        <div className={'text-white p-10 space-y-4 h-[59svh] md:h-[87.5svh]'}>
            <h2 className={'text-2xl'}>Тут ничего нет...</h2>
            <p className={'text-xl'}>Но можно вернуться туда, где что-то есть</p>
            <Link
                id={'returnToMain'}
                className={'w-full place-items-center flex justify-around border-2 border-white py-3 px-5  uppercase text-white hover:bg-white hover:text-black md:w-1/3' }
                href="/">На главную</Link>
        </div>
    )
}
