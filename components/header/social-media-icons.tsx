import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-2">
      <Link href="https://www.facebook.com/Iliasse.Mofloh/" target="_blank">
        <Facebook />
      </Link>
      <Link href="https://www.instagram.com/iliasse_mofloh/" target="_blank">
        <Instagram />
      </Link>
      <Link href="https://www.linkedin.com/in/iliasse-mouflih/" target="_blank">
        <Linkedin />
      </Link>
      <Link href="https://www.github.com/imouflih" target="_blank">
        <Github />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
