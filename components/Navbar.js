function Navbar({ children }) {
  return (
    <nav>
      <ul className="flex flex-row">{children}</ul>
    </nav>
  );
}

export default Navbar;
