function NavItem({ children }) {
  return (
    <li className="p-2 hover:bg-gray-700 hover:text-white transition-colors duration-500 ease-in">
      {children}
    </li>
  );
}

export default NavItem;
