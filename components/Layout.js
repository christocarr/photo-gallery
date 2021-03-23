import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Chris Carr Photo Gallery</title>
        <meta charSet="utf-8" />
        <meta lang="en" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen relative">
        <Header />
        <main className="mb-14 md:px-8 lg:px-24 xl:w-5/6 xl:m-auto xl:mt-20 xl:mb-40 2xl:w-6/12 2xl:p-0">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
