import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorText from "../../components/Typography/ErrorText";
import InputText from "../../components/Input/InputText";
import { apiPost } from "../../utils/https/request";
import { toast } from "react-hot-toast";
import { urlApi } from "../../utils/https/AxiosInterceptor";
import { useEffect } from "react";

function Login() {
  const INITIAL_LOGIN_OBJ = {
    password: "",
    username: "",
    mode: 0,
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);
  const [mode, setMode] = useState(urlApi[0]);

  useEffect(() => {
    localStorage.setItem("api_admin", mode.value);
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (loginObj.username.trim() === "")
      return setErrorMessage("Email Id is required! (use any value)");
    if (loginObj.password.trim() === "")
      return setErrorMessage("Password is required! (use any value)");
    else {
      setLoading(true);
      // Call API to check user credentials and save token in localstorage

      try {
        const res = await apiPost("login", loginObj);
        if (res?.error === 0) {
          if (res?.data?.role > 8) {
            localStorage.setItem("token", res?.data?.token);
            localStorage.setItem("userid", res?.data?.id);
            window.location.href = "/app/dashboard";
          } else {
            toast.error("Ko đủ quyền hạng");
          }
        } else {
          toast.error(res?.message);
        }
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    }
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    <div className="flex items-center min-h-screen bg-base-200">
      <div className="w-full max-w-2xl mx-auto shadow-xl card">
        <div className="px-10 py-24">
          <h2 className="mb-2 text-2xl font-semibold text-center">Login</h2>
          <form onSubmit={(e) => submitForm(e)}>
            <div className="mt-4 mb-6">
              <label className="label">
                <span className={"label-text text-base-content "}>Mode</span>
              </label>
              <select
                onChange={(e) => {
                  const value = JSON.parse(e.target.value);
                  setMode(value);
                  localStorage.setItem("api_admin", value.value);
                }}
                className="w-full select-bordered select"
              >
                {urlApi.map((e, index) => (
                  <option
                    value={JSON.stringify(e)}
                    key={index}
                    defaultValue={e === mode}
                  >
                    {e.label}
                  </option>
                ))}
              </select>

              <InputText
                type="username"
                defaultValue={loginObj.username}
                updateType="username"
                containerStyle="mt-4"
                labelTitle="User Name"
                updateFormValue={updateFormValue}
              />

              <InputText
                defaultValue={loginObj.password}
                type="password"
                updateType="password"
                containerStyle="mt-4"
                labelTitle="Password"
                updateFormValue={updateFormValue}
              />
            </div>

            <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
            <button
              type="submit"
              className={
                "btn mt-2 w-full btn-primary" + (loading ? " loading" : "")
              }
            >
              Login
            </button>

            <div className="mt-4 text-center">
              Don't have an account yet?{" "}
              <Link to="/register">
                <span className="inline-block transition duration-200 hover:text-primary hover:underline hover:cursor-pointer">
                  Register
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
