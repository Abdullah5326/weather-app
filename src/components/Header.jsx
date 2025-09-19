import SearchForm from "./SearchForm";

function Header() {
  return (
    <header className="col-span-2 justify-self-center py-8 flex flex-col items-center">
      <h1 className="text-5xl font-semibold pb-12 text-center text-neutral-0">
        How's the sky looking today?
      </h1>
      <SearchForm />
    </header>
  );
}

export default Header;
