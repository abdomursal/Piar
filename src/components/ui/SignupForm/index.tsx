import{ useState } from "react";
import "./signupForm.css";
import Button from "../Button";
import { SignupFormProps } from "../../../types/ui/SignupForm";
import { addUser, userLogin } from "../../../lib/users";
import { onApiError } from "../../../lib/api";
import { useAppDispatch } from "../../../store/hooks";
import { setToken } from "../../../store/authReducer";

function SignupForm() {
  const [data, setData] = useState<SignupFormProps>({});
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();
  const onSubmitHandle = async () => {
    const isValid = data?.name && data?.password && data?.email ? true : false;

    if (isValid) {
      try {
        const userResult = await addUser({
          name: data.name,
          login: data.email,
          password: data.password,
          comment: "",
        });
        if (userResult) {
          const loginResult = await userLogin({
            login: data.email,
            password: data.password,
          });
          return dispatch(setToken(loginResult["user_jwt"]));
        }
      } catch (e) {
        return onApiError();
      }
    }
    setError(true);
  };

  return (
    <div className="container-Signup">
      <form>
        <label className="label">
          <p>Name</p>
          <input
            className="input"
            type="text"
            name="name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <p>Email</p>
          <input
            className="input"
            type="email"
            name="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <p>Password</p>
          <input
            className="input"
            type="password"
            name="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </label>
      </form>
      <div className="button-wrap">
        <Button title={"Sign up"} onClick={()=>onSubmitHandle()} ></Button>
      </div>
      {error && (
        <p className="errorText">Error occurred, Please try again later..</p>
      )}
    </div>
  );
}

export default SignupForm;
