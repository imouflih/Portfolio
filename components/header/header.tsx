import Link from "next/link";
import Image from "next/image";
import NavMenu from "./nav-menu";
import SocialMediaIcons from "./social-media-icons";
import ThemeToggle from "../theme/theme-toggle";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2">
      <div className="flex items-center h-16 px-24 space-x-4">
        <div className="flex gap-6">
          <Link href="/" className="relative flex items-center w-64 h-44">
            <Image
              src={"/images/logo.png"}
              fill
              className="block object-contain w-full h-full"
              alt="Logo"
            />
          </Link>
        </div>
        <NavMenu />
        <div className="flex justify-end flex-1 space-x-8">
          <SocialMediaIcons />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
