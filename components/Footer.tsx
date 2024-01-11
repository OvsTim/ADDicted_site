

const Footer = () => {

    return (
        <div className={'bg-gray-600 flex flex-col place-items-center w-full m-auto h-1/5 p-3 text-white justify-center space-x-2 mt-20 md:flex-row'}>
            <span className={'text-center'}>{'©2024 Любое наебалово преследуется по закону'}</span>
            <a
                className={'underline hover:text-gray-300'}
                href={'https://www.youtube.com/@addicted8546'}
                target={'_blank'}
                rel='noopener noreferrer'
            >
                Сайт разработчика
            </a>
        </div>
    )
}
export default Footer
