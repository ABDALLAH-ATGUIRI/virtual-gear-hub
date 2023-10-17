import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { setCredentials } from "../../features/auth/authSlice";
import { useRegisterMutation } from "../../features/auth/authApiSlice";
import { Card, Input, Button, Typography, Alert } from "@material-tailwind/react";
import { useDispatch } from "react-redux";

const INITFORM = {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
}
const RegistrationForm = () => {

    const errRef = useRef()
    const [message, setMessage] = useState({ message: '', type: '' })
    const [userInfo, setUserInfo] = useState(INITFORM)
    const navigate = useNavigate()

    const [register, { isLoading }] = useRegisterMutation()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userData = await register(userInfo).unwrap()
            dispatch(setCredentials({ ...userData }))
            setMessage({ message: 'Successfully logged in', type: 'success' })
            setTimeout(() => {
                setUserInfo(INITFORM)
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

    useEffect(() => {
        setMessage('')
    }, [userInfo])

    return (
        <Card color="transparent" shadow={false} className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Typography variant="h4" color="blue-gray" className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
            </Typography>
            <form className="py-6 flex flex-col gap-10" action="#" onSubmit={(e) => handleSubmit(e)}>
                <Input
                    size="lg"
                    label="Name"
                    color="orange"
                    variant="outlined"
                    placeholder="Abdallah atguiri"
                    required
                    onChange={(e) => { setUserInfo({ ...userInfo, name: e.target.value }) }}
                />
                <Input
                    size="lg"
                    type="email"
                    label="Email"
                    color="orange"
                    variant="outlined"
                    placeholder="AbdallahAtguiri@gmail.com"
                    required
                    onChange={(e) => { setUserInfo({ ...userInfo, email: e.target.value }) }}
                />
                <Input
                    size="lg"
                    label="Password"
                    type="password"
                    color="orange"
                    variant="outlined"
                    placeholder="................"
                    required
                    onChange={(e) => { setUserInfo({ ...userInfo, password: e.target.value }) }}
                />
                <Input
                    type="password"
                    color="orange"
                    variant="outlined"
                    size="lg"
                    label="Confirm password"
                    placeholder="................"
                    required
                    onChange={(e) => { setUserInfo({ ...userInfo, password_confirmation: e.target.value }) }}
                />
                <Button type="submit" fullWidth className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-md text-sm px-5 py-2.5 text-center">
                    Register
                </Button>
            </form>
            {
                message.message ?
                    <Alert ref={errRef} className={`rounded-none border-l-4 font-medium ${message.type === 'error' ? 'border-red-500 text-red-500 bg-red-500/10 ' : 'border-green-500 text-green-500 bg-green-500/10 '}`}>
                        {isLoading ? 'loading...' : message.message}
                    </Alert> : <></>
            }
            <div className="text-center font-normal">
                <Typography color="gray">
                    Already have an account?{" "}
                    <Link to="/auth/login" className="font-medium text-primary hover:underline ">
                        Sign In
                    </Link>
                </Typography>
                <Typography color="gray">
                    Go to home{" "}
                    <Link to="/" className="font-medium text-primary hover:underline ">
                        home <span aria-hidden="true">&rarr;</span>
                    </Link>
                </Typography>
            </div>
        </Card>
    );
}

export default RegistrationForm