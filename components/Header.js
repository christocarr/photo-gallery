import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';
import Navbar from './Navbar';
import NavItem from './NavItem';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuHandler = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="flex flex-row justify-between items-center p-4 md:px-8 lg:px-24 lg:py-8 xl:border-b">
      <Link href="/">
        <h1 className="leading-none text-xl cursor-pointer md:text-2xl md:ml-1">
          Christopher Carr Photography
        </h1>
      </Link>
      {/* if sreen sizes are bigger than md then display none */}
      <div
        onClick={menuHandler}
        className="flex flex-col justify-center align-center mt-2 cursor-pointer sm:block md:hidden"
      >
        {mobileMenuOpen ? (
          <Image
            src="/assets/icons/close.svg"
            width="30"
            height="30"
            alt="close menu"
          />
        ) : (
          <Image
            src="/assets/icons/menu.svg"
            width="30"
            height="30"
            alt="open menu"
          />
        )}
      </div>
      <MobileNav isOpen={mobileMenuOpen}>
        <NavItem>
          <Link href="/people">People</Link>
        </NavItem>
        <NavItem>
          <Link href="/travel">Travel</Link>
        </NavItem>
        <NavItem>
          <Link href="/animals">Animals</Link>
        </NavItem>
        <NavItem>
          <Link href="/about">About</Link>
        </NavItem>
      </MobileNav>

      {/* hide on small screens */}
      <div className="hidden md:block md:-mr-1">
        <Navbar>
          <NavItem>
            <Link href="/people">People</Link>
          </NavItem>
          <NavItem>
            <Link href="/travel">Travel</Link>
          </NavItem>
          <NavItem>
            <Link href="/animals">Animals</Link>
          </NavItem>
          <NavItem>
            <Link href="/about">About</Link>
          </NavItem>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
