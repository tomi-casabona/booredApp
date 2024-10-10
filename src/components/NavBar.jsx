import logo from "../assets/images/logoBoored.png";

export const NavBar = () => {
  return (
    <nav className="flex items-center p-4 w-full mb-16">
      <img src={logo} alt="Company Logo" className="w-25 h-7" />
    </nav>
  );
};
