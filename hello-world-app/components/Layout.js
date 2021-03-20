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
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
