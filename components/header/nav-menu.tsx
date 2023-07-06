import Link from "next/link";
import Button from "../ui/button";

const NavMenu = () => {
  const navLinks = [
    { href: "/", label: "À propos de moi" },
    { href: "/my-projects", label: "Mes projets" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex w-full">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="block px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
        >
          <Button variant="Ghost" size="sm">
            {link.label}
          </Button>
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
