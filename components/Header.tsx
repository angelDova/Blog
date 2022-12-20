import Image from "next/image";
import Link from "next/link";
import profile from "../public/profile-pic.jpg";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            width={50}
            height={50}
            alt="logo"
            src={profile}
          />
        </Link>
        <h1>angelDova</h1>
      </div>

      <div className="">
        <Link
          href="https://angeldova.vercel.app/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#7000ff] flex items-center rounded-full text-center"
        >
          Check out my website!
        </Link>
      </div>
    </header>
  );
}

export default Header;
