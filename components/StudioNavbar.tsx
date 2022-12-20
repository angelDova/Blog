import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#7000ff] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#7000ff] mr-2" />
          Go To Website
        </Link>

        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#7000ff]">
          <h1 className="font-bold text-white">
            Check out my personal website!{" "}
          </h1>
          <Link
            href="https://angeldova.vercel.app/"
            className="text-[#7000ff] font-bold ml-2"
          >
            www.angeldova.vercel.app
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
