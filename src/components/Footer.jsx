function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32 font-mono">
        <div className="basis-1/2">
          <h1 className="text-[11rem] font-semibold tracking-tighter leading-none ">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-16">
          <div className="flex flex-col gap-1.5 items-center">
            <h4 className="mb-8 text-zinc-500">Socials</h4>
            {["Instagram", "Twitter", "LinkedIn"].map((item, index) => (
              <a className="text-zinc-500 capitalize" key={index} href="#">
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-1.5 items-center">
            <h4 className="mb-8 text-zinc-500">Sitemaps</h4>
            {["Home", "Work", "Careers", "Contact"].map((item, index) => (
              <a className="text-zinc-200 capitalize" key={index} href="#">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col gap-3 items-center">
            <p className="text-center font-semibold ">Refokus is pioneering digital agency driven by design and empowered by technology.</p>
            <img className="w-20" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
