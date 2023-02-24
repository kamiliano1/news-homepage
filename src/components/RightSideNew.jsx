export default function RightSideNew() {
  return (
    <section className="pt-5 space-y-4 py-4 w-[95%] mx-auto bg-veryDarkBlue text-offWhite px-3 md:px-7 md:space-y-10 md:w-[100%] md:py-[3rem]">
      <h2 className="text-softOrange font-bold text-2xl mb-5 tracking-wider md:text-[3rem] md:leading-10 ">
        New
      </h2>
      <div className="flex flex-col">
        <a
          href="#"
          className="font-bold text-base block text-offWhite hover:text-softOrange md:text-[1.3rem] lg:text-[1.7rem] md:leading-10"
        >
          Hydrogen VS Electric Cars
        </a>
        <p className="text-sm text-darkGrayishBlue md:text-[1rem] lg:text-[1.2rem] md:leading-9">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
      <hr className="text-darkGrayishBlue " />
      <div className="flex flex-col">
        <a
          href="#"
          className="font-bold text-base block text-offWhite hover:text-softOrange md:text-[1.3rem] lg:text-[1.7rem] md:leading-10"
        >
          The Downsides of AI Artistry
        </a>
        <p className="text-sm text-darkGrayishBlue md:text-[1rem] lg:text-[1.2rem] md:leading-9">
          What are the possible adverse effects of on-demand AI image generation
        </p>
      </div>
      <hr className="text-darkGrayishBlue " />
      <div className="flex flex-col">
        <a
          href="#"
          className="font-bold text-base block text-offWhite hover:text-softOrange md:text-[1.3rem] lg:text-[1.7rem] md:leading-10"
        >
          Is VC Funding Drying Up?
        </a>
        <p className="text-sm text-darkGrayishBlue md:text-[1rem] lg:text-[1.2rem] md:leading-9">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </section>
  );
}
