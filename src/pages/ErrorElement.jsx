import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  if (error.status !== 404) {
    return <div>There was and error</div>;
  }
  return <div>ErrorElement</div>;
};
export default ErrorElement;
