import AppNav from "./AppNav";
import Header from "./Header";

function NoSearchResults() {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-neutral-900 text-neutral-100">
      <AppNav />
      <Header />
      <h2 className="text-2xl text-center font-semibold">
        No search results found!
      </h2>
    </div>
  );
}

export default NoSearchResults;
