import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorText from "../../components/Typography/ErrorText";
import InputText from "../../components/Input/InputText";
import { apiPost } from "../../utils/https/request";
import toast from "react-hot-toast";

function Register() {
    const INITIAL_LOGIN_OBJ = {
        password : "",
        username : "",
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ)

  const submitForm = async (e) =>{
    e.preventDefault()
    setErrorMessage("")

    if(loginObj.username.trim() === "")return setErrorMessage("Email Id is required! (use any value)")
    if(loginObj.password.trim() === "")return setErrorMessage("Password is required! (use any value)")
    else{
        setLoading(true)
        
        try {
            const res = await apiPost('register' , loginObj)
            if (res?.error === 0) {
                toast.success(res?.message)
                setTimeout(() => {
                    window.location.href = '/login'
                } , 1000)
            } else {
                toast.error(res?.message)
            }
        } catch (error) {
            console.log(error)
        }


        setLoading(false)
    }
}

const updateFormValue = ({updateType, value}) => {
    setErrorMessage("")
    setLoginObj({...loginObj, [updateType] : value})
}

  return (
    <div className="flex items-center min-h-screen bg-base-200">
      <div className="w-full max-w-2xl mx-auto shadow-xl card">
        <div className="px-10 py-24">
          <h2 className="mb-2 text-2xl font-semibold text-center">Register</h2>
          <form onSubmit={(e) => submitForm(e)}>
            <div className="mb-4">
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
              Register
            </button>

            <div className="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/login">
                <span className="inline-block transition duration-200 hover:text-primary hover:underline hover:cursor-pointer">
                  Login
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
