import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status !== 404) {
    return <h2>There was an error</h2>;
  }
  return (
    <main className="grid place-items-center h-screen">
      <div className="flex flex-col gap-8 justify-center items-center">
        <h1 className="text-9xl leading-16 font-bold tracking-wider text-secondary">
          404
        </h1>
        <p className="font-bold text-4xl">page not found</p>
        <p className="tracking-wide text-xl">
          Sorry, we couldn't find page you are looking for.
        </p>
        <Link to="/" className="btn btn-primary uppercase">
          go back home
        </Link>
      </div>
    </main>
  );
};
export default Error;
