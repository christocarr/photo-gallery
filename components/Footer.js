import Carbonbadge from 'react-carbonbadge';

function Footer() {
  return (
    <footer className="absolute bottom-0 right-0 w-screen flex flex-col justify-center items-center h-auto py-2 md:py-2 xl:border-t 2xl:flex-row 2xl:py-6">
      <p className="mb-4 leading-6 md:text-lg md:leading-7 2xl:mr-2 2xl:mb-0">
        Copyright <span>&#169;</span> Christopher Carr
      </p>
      <p className="mb-4 leading-6 md:text-lg md:leading-7 2xl:mb-0">
        Made with{' '}
        <a href="https://nextjs.org/" className="underline">
          Next.js
        </a>{' '}
        and{' '}
        <a href="https://tailwindcss.com/" className="underline">
          Tailwindcss
        </a>
      </p>
      <div className="justify-self-end 2xl:ml-4 2xl:mt-6 ">
        <Carbonbadge />
      </div>
    </footer>
  );
}

export default Footer;
