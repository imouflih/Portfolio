import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Button from "../ui/button";

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-2">
      <Link href="https://www.facebook.com/Iliasse.Mofloh/" target="_blank">
        <Button variant="Ghost" size="sm">
          <Facebook />
        </Button>
      </Link>
      <Link href="https://www.instagram.com/iliasse_mofloh/" target="_blank">
        <Button variant="Ghost" size="sm">
          <Instagram />
        </Button>
      </Link>
      <Link href="https://www.linkedin.com/in/iliasse-mouflih/" target="_blank">
        <Button variant="Ghost" size="sm">
          <Linkedin />
        </Button>
      </Link>
      <Link href="https://www.github.com/imouflih" target="_blank">
        <Button variant="Ghost" size="sm">
          <Github />
        </Button>
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
