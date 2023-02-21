import companyLogo from "/logo.svg";
export default function Navbar() {
  return (
    <nav
      className="flex items-center max-w-[1440px] text-lg mx-auto pt-4 space-x-8
    "
    >
      <img src={companyLogo} alt="company Logo" className="mr-auto" />
      <a href="#" aria-current="true">
        Home
      </a>
      <a href="#" aria-current="false">
        New
      </a>
      <a href="#" aria-current="false">
        Popular
      </a>
      <a href="#" aria-current="false">
        Trending
      </a>
      <a href="#" aria-current="false">
        Categories
      </a>
      <div>
        <a href="#" aria-current="true">
          Home
        </a>
        <a href="#" aria-current="false">
          New
        </a>
        <a href="#" aria-current="false">
          Popular
        </a>
        <a href="#" aria-current="false">
          Trending
        </a>
        <a href="#" aria-current="false">
          Categories
        </a>
      </div>
    </nav>
  );
}
