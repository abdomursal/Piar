import { useState, useEffect } from "react";
import Dashboard from "../components/section/Dashboard";
import Home from "../components/section/Home";
import { setAuthToken } from "../lib/api";
import { useAppSelector } from "../store/hooks";

function App() {
  const [auth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const token = useAppSelector((state) => state.token.token);

  useEffect(() => {
    if (token) {
      setAuth(true);
      setIsLoading(false);
      setAuthToken(token);
    } else {
      setIsLoading(false);
      setAuth(false);
    }
  }, [token]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <div className="App">{auth ? <Dashboard /> : <Home />}</div>
    </>
  );
}

export default App;
