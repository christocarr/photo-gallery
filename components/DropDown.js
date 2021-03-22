import Image from 'next/image';
import Link from 'next/link';
import NavItem from './NavItem';

function DropDown({ isOpen, handleDropDown }) {
  return (
    <>
      <span
        onClick={handleDropDown}
        className="flex flex-row justify-center content-center cursor-pointer"
      >
        Gallery
        {/* {isOpen ? (
          <Image
            src="/assets/icons/arrow_up.svg"
            alt="close gallery navigation"
            width="20"
            height="20"
          />
        ) : (
          <Image
            src="/assets/icons/arrow_down.svg"
            alt="open gallery navigation"
            width="20"
            height="20"
          />
        )} */}
      </span>
      {isOpen && (
        <ul className="absolute top-11 right-4 bg-white text-black p-5 border">
          <NavItem>
            <Link href="/people">People</Link>
          </NavItem>
          <NavItem>
            <Link href="/travel">Travel</Link>
          </NavItem>
          <NavItem>
            <Link href="/animals">Animals</Link>
          </NavItem>
        </ul>
      )}
    </>
  );
}

export default DropDown;
