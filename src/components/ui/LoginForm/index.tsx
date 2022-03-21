import { useState } from "react";
import "./loginForm.css";
import Button from "../Button";
import { LoginFormProps } from "../../../types/ui/LoginForm";
import { useAppDispatch } from "../../../store/hooks";
import { userLogin } from "../../../lib/users";
import { setToken } from "../../../store/authReducer";
import { onApiError } from "../../../lib/api";

function LoginForm() {
  const [data, setData] = useState<LoginFormProps>({});
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();

  const submitLoginHandle = async () => {
    const isValid = data?.password && data?.email ? true : false;
    if (isValid) {
      try {
        const loginResult = await userLogin({
          login: data.email,
          password: data.password,
        });
        return dispatch(setToken(loginResult["user_jwt"]));
      } catch (e) {
        return onApiError();
      }
    }
    setError(true);
  };

  return (
    <div className="container-loginForm">
      <form>
        <label className="label">
          <p>Email</p>
          <input
            className="input"
            type="text"
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
        <Button title={"Login"} onClick={()=>setError(true)} />
      </div>
      {error && (
        <p className="errorText"> All the functionalities has been disabled! </p>
      )}
    </div>
  );
}

export default LoginForm;
