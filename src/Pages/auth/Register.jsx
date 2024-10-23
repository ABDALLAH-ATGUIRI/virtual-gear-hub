import { Input, Button, Typography, Alert } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "@features/auth/authApiSlice";
import { setCredentials } from "@features/auth/authSlice";
import { closeDialog } from "@features/dialogsReducer";
import DialogDefault from "../../components/DialogDefault";

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
                dispatch(closeDialog('register-user'))
                setUserInfo(INITFORM)
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

    useEffect(() => setMessage(''), [userInfo])

    return (
        <DialogDefault title={"Create your account"} dialogId={'register-user'} >
            {{
                body: <form className="py-6 flex flex-col gap-10" action="#" onSubmit={(e) => handleSubmit(e)}>
                    <Input
                        size="lg"
                        label="Name"
                        color="deep-purple"
                        variant="outlined"
                        required
                        onChange={(e) => { setUserInfo({ ...userInfo, name: e.target.value }) }}
                    />
                    <Input
                        size="lg"
                        type="email"
                        label="Email"
                        color="deep-purple"
                        variant="outlined"

                        required
                        onChange={(e) => { setUserInfo({ ...userInfo, email: e.target.value }) }}
                    />
                    <Input
                        size="lg"
                        label="Password"
                        type="password"
                        color="deep-purple"
                        variant="outlined"
                        required
                        onChange={(e) => { setUserInfo({ ...userInfo, password: e.target.value }) }}
                    />
                    <Input
                        type="password"
                        color="deep-purple"
                        variant="outlined"
                        size="lg"
                        label="Confirm password"
                        required
                        onChange={(e) => { setUserInfo({ ...userInfo, password_confirmation: e.target.value }) }}
                    />
                    <Button type="submit" color="deep-purple" fullWidth>Register</Button>
                </form>,
                footer: <>
                    {
                        message.message ?
                            <Alert ref={errRef} className={`rounded-none border-l-4 mb-4 font-medium ${message.type === 'error' ? 'border-red-500 text-red-500 bg-red-500/10 ' : 'border-green-500 text-green-500 bg-green-500/10 '}`}>
                                {isLoading ? 'loading...' : message.message}
                            </Alert> : <></>
                    }
                    <div className="w-full flex justify-between px-2 font-normal">
                        <Typography color="gray">
                            Already have an account?{" "}
                            <span className="font-medium text-primary hover:underline ">Sign In</span>
                        </Typography>
                        <Typography color="gray">
                            Go to home{" "}
                            <span className="font-medium text-primary hover:underline ">home <span aria-hidden="true">&rarr;</span></span>
                        </Typography>
                    </div>
                </>
            }}
        </DialogDefault>
    );
}

export default RegistrationForm