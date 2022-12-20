function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div className="">
        <h1 className="text-7xl">Angel's Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#7000ff]">
            Every Developers
          </span>{" "}
          Favorite Blog In The Devosphere
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New product features | The lates in technology | The weekly debugging
        nightmares & more!
      </p>
    </div>
  );
}

export default Banner;
