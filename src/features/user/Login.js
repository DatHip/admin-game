import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import ErrorText from  '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'
import { apiPost} from '../../utils/https/request'

function Login(){

    const INITIAL_LOGIN_OBJ = {
        password : "",
        username : "",
        mode: 0,
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
            // Call API to check user credentials and save token in localstorage
            // localStorage.setItem("token", "DumyTokenHere")

            try {
                const res = await apiPost('login' , loginObj)
                console.log(res)
                if (res?.error === 0) {

                } else {
                
                }
            } catch (error) {
                console.log(error)
            }


            setLoading(false)
            // window.location.href = '/app/welcome'
        }
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setLoginObj({...loginObj, [updateType] : value})
    }

    return(
        <div className="flex items-center min-h-screen bg-base-200">
            <div className="w-full max-w-2xl mx-auto shadow-xl card">
                <div className='px-10 py-24'>
                    <h2 className='mb-2 text-2xl font-semibold text-center'>Login</h2>
                    <form onSubmit={(e) => submitForm(e)}>

                        <div className="mb-4">

                            <InputText type="username" defaultValue={loginObj.username} updateType="username" containerStyle="mt-4" labelTitle="User Name" updateFormValue={updateFormValue}/>

                            <InputText defaultValue={loginObj.password} type="password" updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={updateFormValue}/>

                        </div>

                        <div className='text-right text-primary'><Link to="/forgot-password"><span className="inline-block text-sm transition duration-200 hover:text-primary hover:underline hover:cursor-pointer">Forgot Password?</span></Link>
                        </div>

                        <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                        <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Login</button>

                        <div className='mt-4 text-center'>Don't have an account yet? <Link to="/register"><span className="inline-block transition duration-200 hover:text-primary hover:underline hover:cursor-pointer">Register</span></Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login