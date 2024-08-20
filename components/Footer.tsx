import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black pt-10 pb-8 mx-auto">
      <div className="p-16">
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
            <p className="mt-8  uppercase tracking-widest max-w-[150px]">
              Start Strong, Stay Strong.
            </p>
          </div>
          {/* links */}
          <div className="flex flex-col">
            <h4 className="tracking-widest mb-4">Pages:</h4>
            <Link href="/" className="text-lg w-[60px]  ">
              <div className="w-[60px]">
                <p className="hover:text-accent">Home</p>
              </div>
            </Link>
            <Link href="/about" className="text-lg w-[100px] ">
              <div className="w-[100px]">
                <p className="hover:text-accent">About Us</p>
              </div>
            </Link>
            <Link href="/classes" className="text-lg w-[60px] ">
              <div className="w-[60px]">
                <p className="hover:text-accent">Classes</p>
              </div>
            </Link>
            <Link href="/membership" className="text-lg w-[60px] ">
              <div className="w-[60px]">
                <p className="hover:text-accent">Membership</p>
              </div>
            </Link>
            <Link href="/contact" className="text-lg w-[60px] ">
              <div className="w-[60px]">
                <p className="hover:text-accent">Contact</p>
              </div>
            </Link>
          </div>
          {/* social */}
          <div className="flex flex-col">
            <h4 className="tracking-widest mb-4">Find Us At:</h4>
            <Link
              href="https://facebook.com/"
              target="_blank"
              className="flex gap-2 mb-2 hover:text-accent transition-all"
            >
              <p className="tracking-wide uppercase">Facebook</p>
              <FaFacebook className="mt-1" />
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              className="flex gap-2 mb-2 hover:text-accent transition-all"
            >
              <p className="tracking-wide uppercase">Twitter</p>
              <FaTwitter className="mt-1" />
            </Link>
            <Link
              href="https://instagram.com/"
              target="_blank"
              className="flex gap-2 mb-2 hover:text-accent transition-all"
            >
              <p className="tracking-wide uppercase">Instagram</p>
              <FaInstagram className="mt-1" />
            </Link>
            <Link
              href="https://youtube.com/"
              target="_blank"
              className="flex gap-2 mb-2 hover:text-accent transition-all"
            >
              <p className="tracking-wide uppercase">Youtube</p>
              <FaYoutube className="mt-1" />
            </Link>
          </div>
          {/* Contact  */}
          <div className="flex flex-col">
            <h4 className="tracking-widest mb-4">Contact Us:</h4>
            <div className="flex gap-2 mb-4 ">
              <FaMapMarkerAlt className="text-2xl" />
              <p className="text-lg">Elysium 1 , FlavorTown</p>
            </div>
            <div className="flex gap-2 mb-4 ">
              <FaPhoneAlt className="text-2xl" />
              <p className="text-lg">123-456-789</p>
            </div>
            <div className="flex gap-2 ">
              <FaEnvelope className="text-2xl" />
              <a
                href="mailto:pulsefit_demo@gmail.com"
                className="text-lg hover:text-accent transition-all"
              >
                pulsefit_demo@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white mt-4">
          <p className="text-white mt-4">&copy; Copyright 2024 Quincy Fer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
