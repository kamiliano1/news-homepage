export default function RightSideNew() {
  return (
    <section className="pt-5 space-y-4 py-4 w-[95%] mx-auto bg-veryDarkBlue text-offWhite px-3 md:px-7 md:space-y-10">
      <h2 className="text-softOrange font-bold text-2xl mb-5 tracking-wider md:text-[3rem] md:leading-10">
        New
      </h2>
      <div className="flex flex-col">
        <p className="text-sm text-darkGrayishBlue md:text-xl">
          <a
            href="#"
            className="font-bold text-base block text-offWhite hover:text-softOrange"
          >
            Hydrogen VS Electric Cars
          </a>
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
      <hr className="text-darkGrayishBlue" />
      <div className="flex flex-col">
        <p className="text-sm text-darkGrayishBlue md:text-xl">
          <a
            href="#"
            className="font-bold text-base block text-offWhite hover:text-softOrange"
          >
            The Downsides of AI Artistry
          </a>
          What are the possible adverse effects of on-demand AI image generation
        </p>
      </div>
      <hr className="text-darkGrayishBlue" />
      <div className="flex flex-col">
        <p className="text-sm text-darkGrayishBlue md:text-xl">
          <a
            href="#"
            className="font-bold text-base block text-offWhite hover:text-softOrange"
          >
            Is VC Funding Drying Up?
          </a>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </section>
  );
}
