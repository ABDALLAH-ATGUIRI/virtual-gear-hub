import { Input, Button, Typography, Alert, } from "@material-tailwind/react";
import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@features/auth/authApiSlice";
import { setCredentials } from "@features/auth/authSlice";
import { closeDialog } from "@features/dialogsReducer";
import DialogDefault from "../../components/DialogDefault";

const Login = () => {

    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [message, setMessage] = useState({ message: '', type: '' })
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current?.focus()
    }, [])

    useEffect(() => {
        setMessage('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user || !pwd) setMessage('Empty Email or Password')

        try {
            const userData = await login({ email: user, password: pwd }).unwrap()
            dispatch(setCredentials({ ...userData }))
            setMessage({ message: 'Successfully logged in', type: 'success' })
            setTimeout(() => {
                dispatch(closeDialog('login-user'))
                setUser('')
                setPwd('')
                navigate('/home')
                setMessage('')
            }, 1000)
        } catch (error) {
            if (!error?.response) {
                setMessage({ message: 'No Server Response', type: 'error' })
            } else if (error.response?.status === 400) {
                setMessage({ message: 'Invalid Email or Password', type: 'error' })
            } else if (error.response?.status === 401) {
                setMessage({ message: 'Unauthorized', type: 'error' })
            } else {
                setMessage({ message: 'Login Failed', type: 'error' })
            }
            errRef.current?.focus()
            setTimeout(() => {
                setMessage('')
            }, 1000)
        }
    }

    const handleUserInput = (e) => setUser(e.target.value)
    const handlePwdInput = (e) => setPwd(e.target.value)

    return (
        <DialogDefault title={"Create your account"} dialogId={'login-user'} >
            {{
                body:
                    <form className="py-6 flex flex-col gap-10" action="#" onSubmit={(e) => handleSubmit(e)}>
                        <Input type='email' value={user} color="deep-purple" variant="outlined" size="lg" label="Email" onChange={(e) => { handleUserInput(e) }} required />
                        <Input type="password" value={pwd} color="deep-purple" variant="outlined" size="lg" label="Password" onChange={(e) => { handlePwdInput(e) }} required />
                        <Button type="submit" color="deep-purple" fullWidth>Sign In</Button>
                    </form>,
                footer:
                    <>
                        {
                            message.message ?
                                <Alert ref={errRef} className={`rounded-none mb-4 border-l-4 font-medium ${message.type === 'error' ? 'border-red-500 text-red-500 bg-red-500/10 ' : 'border-green-500 text-green-500 bg-green-500/10 '}`}>
                                    {isLoading ? 'loading...' : message.message}
                                </Alert> :
                                <></>
                        }
                        <div className="w-full px-2 flex justify-between text-center font-normal">
                            <Typography color="gray" > Don’t have an account yet ?{" "}<span className="font-medium text-primary hover:underline "> Sign up</span></Typography>
                            <Typography color="gray">Go to home{" "} <span className="font-medium text-primary hover:underline ">home <span aria-hidden="true">&rarr;</span></span></Typography>
                        </div>
                    </>
            }}
        </DialogDefault>


    )
}

export default Login