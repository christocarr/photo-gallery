function MobileNav({ isOpen, children }) {
  return (
    isOpen && (
      <nav className="absolute z-30 top-11 right-4 bg-white p-5 border">
        <ul className="text-black">{children}</ul>
      </nav>
    )
  );
}

export default MobileNav;
