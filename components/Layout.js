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
        <main className="mb-14">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
