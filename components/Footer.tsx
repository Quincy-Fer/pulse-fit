import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black pt-12 pb-12 mx-auto">
      <div className="p-8">
        <div className="text-white grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* logo */}
          <div className="flex flex-col">
            <Link href="/">
              <Image
                src="/images/logo-no-background.png"
                height={100}
                width={150}
                alt="logo"
              />
            </Link>
            <p className="mt-4 font-bold uppercase">
              Start Strong, Stay Strong.
            </p>
          </div>
          {/* links */}
          <div>
            <h1>lala</h1>
          </div>
          {/* social */}
          <div>
            <h1>lala</h1>
          </div>
          {/* newsletter/cta  */}
          <div>
            <h1>lala</h1>
          </div>
        </div>
      </div>
      {/* copyright section */}
    </footer>
  );
};

export default Footer;
