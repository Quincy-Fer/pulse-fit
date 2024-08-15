import Image from "next/image";
import Link from "next/link";
import { NAVLINKS } from "@/constants/index";

const Header = () => {
  return (
    <header
      className="fixed flex items-center justify-between px-10  z-30 py-2  w-full mx-auto  bg-black"
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
    </header>
  );
};

export default Header;
