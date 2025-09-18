import { Link } from "react-router-dom";
import AppNav from "./AppNav";
import { HiArrowPath, HiMiniNoSymbol } from "react-icons/hi2";
import Button from "./Button";

function ErrorPage() {
  return (
    <div className="bg-neutral-900 top-0 bottom-0 left-0 right-0 text-stone-100 absolute pt-8">
      <AppNav />
      <div className="flex flex-col justify-center items-center mt-15">
        <p className="mb-3">
          <HiMiniNoSymbol className="h-10 w-10" />
        </p>
        <h1 className="text-5xl font-semibold mb-8">Something went wrong</h1>
        <p className="max-w-100 text-center w-full text-neutral-300 text-sm font-semibold mb-6">
          We could'nt connect to the server (API error).Please try again in few
          moments.
        </p>
        <Link to="/">
          <Button>
            <HiArrowPath /> <span>Retry</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
