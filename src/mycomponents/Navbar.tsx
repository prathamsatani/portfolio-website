import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-5 pr-6 rounded-full w-[90%] max-w-6xl shadow-lg transition-all duration-300 hover:bg-opacity-70">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-start">
            <Image
              src="/images/vite.svg"
              alt="NextJS Logo"
              width={20}
              height={20}
            />
            <Image
              src="/images/react.svg"
              alt="React Logo"
              width={20}
              height={20}
            />
            &nbsp;&nbsp;
            <p>React NextJS</p>
          </div>
          <div>
            <Link href="/">Home</Link>&nbsp;&nbsp;
            <Link href="/about">About</Link>&nbsp;&nbsp;
            <Link href="/services">Services</Link>&nbsp;&nbsp;
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
