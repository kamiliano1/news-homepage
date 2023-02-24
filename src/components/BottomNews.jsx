import firstArticleImg from "/image-retro-pcs.jpg";
import secondArticleImg from "/image-top-laptops.jpg";
import thirdArticleImg from "/image-gaming-growth.jpg";
export default function BottomNews() {
  return (
    <section className="pt-10 space-y-6 pb-10 md:grid md:grid-cols-3 md:col-span-3 md:space-y-0 gap-x-10  md:mt-7">
      <div className="flex ">
        <img
          src={firstArticleImg}
          alt="retro computer"
          className="w-[30%] max-h-[190px] max-w-[120px]"
        />
        <div className="px-3 w-[70%] space-y-2 md:px-6 md:flex md:flex-col md:justify-between">
          <h2
            className="text-darkGrayishBlue text-opacity-50 text-3xl md:text-[2.4rem] md:font-bold"
            aria-hidden="true"
          >
            01
          </h2>
          <a
            href="#"
            className="font-bold text-base block hover:text-softRed pb-1 md:text-[1.4rem] md:pb-0"
          >
            Reviving Retro PCs
          </a>
          <p className="text-sm md:text-lg">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>

      <div className="flex">
        <img
          src={secondArticleImg}
          alt="keyboard buttons"
          className="w-[30%] max-h-[190px] max-w-[120px]"
        />
        <div className="px-3 w-[70%] space-y-2 md:px-6 md:flex md:flex-col md:justify-between">
          <h2
            className="text-darkGrayishBlue text-opacity-50 text-3xl md:text-[2.4rem] md:font-bold"
            aria-hidden="true"
          >
            02
          </h2>
          <a
            href="#"
            className="font-bold text-base block hover:text-softRed pb-1 md:text-[1.4rem] md:pb-0"
          >
            Top 10 Laptops of 2022
          </a>
          <p className="text-sm md:text-lg">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="flex">
        <img
          src={thirdArticleImg}
          alt="keyboard buttons"
          className="w-[30%] max-h-[190px] max-w-[120px]"
        />
        <div className="px-3 w-[70%] space-y-2 md:px-6 md:flex md:flex-col md:justify-between">
          <h2
            className="text-darkGrayishBlue text-opacity-50 text-3xl md:text-[2.4rem] md:font-bold"
            aria-hidden="true"
          >
            03
          </h2>
          <a
            href="#"
            className="font-bold text-base block hover:text-softRed pb-1 md:text-[1.4rem] md:pb-0"
          >
            The Growth of Gaming
          </a>
          <p className="text-sm md:text-lg">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
