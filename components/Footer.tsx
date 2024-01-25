export const Footer = () => {
  return (
    <div
      className={
        'm-auto mt-20 flex h-1/5 w-full flex-col place-items-center justify-center space-x-2 bg-gray-600 p-3 text-white md:flex-row'
      }
    >
      <span className={'text-center'}>
        {'©2024 Любое на***лово преследуется по закону'}
      </span>
      <a
        className={'underline hover:text-gray-300'}
        href={'https://ovstim.ru/'}
        target={'_blank'}
        rel='noopener noreferrer'
      >
        Сайт разработчика
      </a>
    </div>
  );
};
