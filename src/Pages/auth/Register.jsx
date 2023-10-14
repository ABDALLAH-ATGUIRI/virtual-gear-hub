import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/Auth";

const RegistrationForm = () => {

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    const { register } = useContext(AuthContext);


    const handleChange = (e) => {
        e.preventDefault()
        register(userInfo)
    }

    return (
        <Card color="transparent" shadow={false} className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Typography variant="h4" color="blue-gray" className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
            </Typography>
            <form className="py-6" action="#" onSubmit={(e) => handleChange(e)}>
                <div className="mb-4 flex flex-col gap-10">
                    <Input size="lg" color="orange" variant="outlined" placeholder="Abdallah atguiri" label="Name" onChange={(e) => { setUserInfo({ ...userInfo, name: e.target.value }) }} />
                    <Input size="lg" color="orange" variant="outlined" label="Email" placeholder="AbdallahAtguiri@gmail.com" onChange={(e) => { setUserInfo({ ...userInfo, email: e.target.value }) }} />
                    <Input type="password" color="orange" variant="outlined" size="lg" label="Password" placeholder="................" onChange={(e) => { setUserInfo({ ...userInfo, password: e.target.value }) }} />
                    <Input type="password" color="orange" variant="outlined" size="lg" label="Confirm password" placeholder="................" onChange={(e) => { setUserInfo({ ...userInfo, password_confirmation: e.target.value }) }} />
                </div>
                <Button fullWidth className="w-full mt-8 text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-md text-sm px-5 py-2.5 text-center">
                    Register
                </Button>
                <div className="w-full flex  items-center justify-between">
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <Link to="/auth/login" className="font-medium text-primary hover:underline ">
                            Sign In
                        </Link>
                    </Typography>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Go to home{" "}
                        <Link to="/" className="font-medium text-primary hover:underline ">
                            home <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </Typography>
                </div>

            </form>
        </Card>
    );
}

export default RegistrationForm