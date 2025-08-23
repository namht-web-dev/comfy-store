import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Register = () => {
  return (
    <section className="grid place-items-center h-screen">
      <Form
        className="card p-5 grid justify-center gap-5 w-96 shadow-lg"
        method="post"
      >
        <h1 className="text-4xl leading-8 font-bold text-center w-full block">
          Register
        </h1>
        <FormInput
          label="username"
          name="username"
          type="text"
          defaultValue="secret"
        />
        <FormInput
          label="email"
          name="email"
          type="email"
          defaultValue="test@test.com"
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          defaultValue="secret"
        />
        <SubmitBtn />
        <button type="button" className="btn btn-secondary uppercase">
          guest user
        </button>
        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
