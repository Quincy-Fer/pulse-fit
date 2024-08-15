import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="flex items-center justify-between px-10  z-30 py-2  w-full mx-auto  bg-black"
      id="home"
    >
      <Link href="/">
        <Image
          src={"/images/logo-no-background.png"}
          height={100}
          width={100}
          alt="logo"
          priority={true}
        />
      </Link>
    </header>
  );
};

export default Header;
