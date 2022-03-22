import { useState } from "react";
import LoginForm from "../../ui/LoginForm";
import Button from "../../ui/Button";
import "./login.css";
import SignupForm from "../../ui/SignupForm";

const SIGNUP = "signup";
const LOGIN = "login";

const Login = () => {
  const [displayForm, setDisplayForm] = useState(LOGIN);

  return (
    <section className="section-wrap">
      <div className="main-wrap">
        <div className="left-section">
          {displayForm === LOGIN ? <LoginForm /> : <SignupForm />}
        </div>
        <div className="right-section">
          <p className="welcome"> Welcome </p>
          <div className="button-register">
            <Button
              className="signupButton"
              title={displayForm === LOGIN ? SIGNUP : LOGIN}
              onClick={() =>
                setDisplayForm(displayForm === LOGIN ? SIGNUP : LOGIN)
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
