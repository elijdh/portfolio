import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/util/themetoggle";

const Header = () => {
  return (
    <header className="fixed w-full z-30 flex items-center justify-center px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row gap-y-6 py-8">
          <Link href={"/"}>
            <Image
              src={"/darklogo.svg"}
              width={220}
              height={48}
              alt=""
              priority={true}
            />
          </Link>
          <div className="ml-auto mt-[-5px]">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
