import {
    Card,
    Input,
    Button,
    Typography,
    Alert,
} from "@material-tailwind/react";
import { useState, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";

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
                setUser('')
                setPwd('')
                navigate('/')
                setMessage('')
            }, 2000)
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
            }, 2000)
        }
    }

    const handleUserInput = (e) => setUser(e.target.value)
    const handlePwdInput = (e) => setPwd(e.target.value)

    return (
        <Card color="transparent" shadow={false} className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Typography variant="h4" color="blue-gray" className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
            </Typography>
            <form className="py-6" action="#" onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-4 flex flex-col gap-10">
                    <Input type='email' value={user} color="orange" variant="outlined" size="lg" label="Email" placeholder="AbdallahAtguiri@gmail.com" onChange={(e) => { handleUserInput(e) }} required />
                    <Input type="password" value={pwd} color="orange" variant="outlined" size="lg" label="Password" placeholder="................" onChange={(e) => { handlePwdInput(e) }} required />
                </div>
                <Button
                    fullWidth
                    type="submit"
                    className="w-full mt-8 text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"
                >
                    Sign In
                </Button>
                <div className="w-full">
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Don’t have an account yet ?{" "}
                        <Link to="/auth/register" className="font-medium text-primary hover:underline "> Sign up</Link>
                    </Typography>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Go to home{" "}
                        <Link to="/" className="font-medium text-primary hover:underline ">
                            home <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </Typography>
                </div>
            </form>
            {
                message.message ?
                    <Alert ref={errRef} className={`rounded-none border-l-4 font-medium ${message.type === 'error' ? 'border-red-500 text-red-500 bg-red-500/10 ' : 'border-green-500 text-green-500 bg-green-500/10 '}`}>
                        {isLoading ? 'loading...' : message.message}
                    </Alert> : <></>
            }

        </Card>
    )
}

export default Login