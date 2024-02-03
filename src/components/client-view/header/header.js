import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/util/themetoggle";

const Header = () => {
  return (
    <header className="fixed z-30 w-full top-0 flex items-center justify-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full items-center gap-y-6 py-8">
          <Link href={"/"}>
            <Image src={"/darklogo.svg"} width={220} height={48} />
          </Link>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
