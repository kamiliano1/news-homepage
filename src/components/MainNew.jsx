import desktopSizePhoto from "/image-web-3-desktop.jpg";
import mobileSizePhoto from "/image-web-3-mobile.jpg";
export default function MainNew() {
  return (
    <section className="pt-5 space-y-4 pb-10 md:grid md:grid-mainArticle md:grid-cols-2 md:pt-0 md:space-y-0 col-span-2 md:gap-x-10 md:gap-y-10 md:items-center md:p-0">
      <picture className="md:col-span-2 self-start">
        <source media="(max-width: 640px)" srcSet={mobileSizePhoto} />
        <source media="(min-width: 641px)" srcSet={desktopSizePhoto} />
        <img src={mobileSizePhoto} alt="figures" />
      </picture>
      <h1 className="text-[2.4rem] leading-10 md:text-[clamp(2.5rem,5vw,4.3rem)] md:leading-[clamp(2.5rem,5vw,4.3rem)] font-extraBold md:row-span-2">
        The Bright Future of Web 3.0?
      </h1>
      <p className="text-sm md:text-xl leading-6">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button className="cursor-pointer text-offWhite bg-softRed px-5 py-2 tracking-widest uppercase font-semibold hover:bg-veryDarkBlue active:bg-veryDarkBlue md:self-end md:justify-self-start md:px-10 md:py-4 md:tracking-[.4rem]">
        Read more
      </button>
    </section>
  );
}
