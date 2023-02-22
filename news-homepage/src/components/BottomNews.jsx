import firstArticleImg from "/image-retro-pcs.jpg";
import secondArticleImg from "/image-top-laptops.jpg";
import thirdArticleImg from "/image-gaming-growth.jpg";
export default function BottomNews() {
  return (
    <section className="pt-5 space-y-4 pb-10 md:flex md:items-start md:col-span-2 md:space-y-0">
      <div className="flex">
        <img src={firstArticleImg} alt="retro computer" className="w-[30%]" />
        <div className="px-3 w-[70%] space-y-2">
          <h2 className="text-darkGrayishBlue text-3xl" aria-hidden="true">
            01
          </h2>
          <p className="text-sm">
            <a
              href="#"
              className="font-bold text-base block hover:text-softRed pb-1"
            >
              Reviving Retro PCs
            </a>
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="flex">
        <img
          src={secondArticleImg}
          alt="keyboard buttons"
          className="w-[30%]"
        />
        <div className="px-3 w-[70%] space-y-2">
          <h2 className="text-darkGrayishBlue text-3xl" aria-hidden="true">
            02
          </h2>
          <p className="text-sm">
            <a
              href="#"
              className="font-bold text-base block hover:text-softRed pb-1"
            >
              Top 10 Laptops of 2022
            </a>
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="flex">
        <img
          src={thirdArticleImg}
          alt="hand with console controller"
          className="w-[30%]"
        />
        <div className="px-3 w-[70%] space-y-2">
          <h2 className="text-darkGrayishBlue text-3xl" aria-hidden="true">
            03
          </h2>
          <p className="text-sm">
            <a
              href="#"
              className="font-bold text-base block hover:text-softRed pb-1"
            >
              The Growth of Gaming
            </a>
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
