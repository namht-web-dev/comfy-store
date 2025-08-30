import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();

    const data = Object.fromEntries(formData);
    try {
      //const response = await customFetch.post("/auth/local", data);
      // store.dispatch(loginUser(response.data));
      await new Promise((resolve) => setTimeout(resolve, 2000));
      store.dispatch(loginUser({ user: { username: "Nam" } }));
      return redirect("/");
    } catch (error) {
      toast.error(error?.response?.data?.error?.message || error.message);
    }
    return null;
  };

const Login = () => {
  return (
    <section className="grid place-items-center h-screen">
      <Form
        className="card p-5 grid justify-center gap-5 w-96 shadow-lg"
        method="post"
      >
        <h1 className="text-4xl leading-8 font-bold text-center w-full block">
          Login
        </h1>
        <FormInput
          type="email"
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
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
