import { Link } from "react-router-dom";
import Button from "./Button";

function PageNotFound() {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-neutral-900 text-neutral-300 text-center pt-20">
      <h1 className="text-4xl font-semibold text-neutral-100 mb-4">
        Page not found
      </h1>
      <Link to="/" className="flex items-center justify-center">
        <Button>&larr; Go back</Button>
      </Link>
    </div>
  );
}

export default PageNotFound;
