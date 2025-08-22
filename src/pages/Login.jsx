import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Login = () => {
  return (
    <section className="grid place-items-center h-screen">
      <Form className="card p-5 grid justify-center gap-5 w-96 " method="post">
        <h1 className="text-4xl leading-8 font-bold text-center w-full block">
          Login
        </h1>
        <FormInput
          type="text"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <SubmitBtn />
        <button type="button" className="btn btn-secondary uppercase">
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link to="/register" className="text-primary px-5">
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
