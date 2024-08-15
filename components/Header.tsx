import Image from "next/image";
import Link from "next/link";
import { NAVLINKS } from "@/constants/index";
import ButtonJoin from "./ButtonJoin";

const Header = () => {
  return (
    <header
      className="fixed flex items-center justify-between px-14  z-30 py-2  w-full mx-auto  bg-black"
      id="home"
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src={"/images/logo-no-background.png"}
          height={100}
          width={100}
          alt="logo"
          priority={true}
          className="py-1"
        />
      </Link>
      {/* Links Desktop */}
      <nav className="flex gap-4 ">
        {NAVLINKS.map((item) => {
          return (
            <Link
              key={item.key}
              href={item.href}
              className="text-white uppercase hover:text-accent transition-all font-bold  text-base"
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="">
        <ButtonJoin
          href="/membership"
          text="Join Now"
          containerStyles="px-8 py-3 text-white bg-accent uppercase font-bold hover:bg-black hover:text-accent transition-all duration-300"
        />
      </div>
    </header>
  );
};

export default Header;
