import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/Auth";

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })

    const { login } = useContext(AuthContext);


    const handleChange = (e) => {
        e.preventDefault()
        login(userInfo)
    }

    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
            </h1>
            <form className="space-y-6 md:space-y-6" action="#" onSubmit={(e) => handleChange(e)}>

                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 " placeholder="name@company.com" required="" onChange={(e) => { setUserInfo({ ...userInfo, email: e.target.value }) }} />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 " required="" onChange={(e) => { setUserInfo({ ...userInfo, password: e.target.value }) }} />
                </div>

                <button type="submit" className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                <div className='w-full flex  items-center justify-between'>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet ?<Link to="/auth/register" className="font-medium text-primary hover:underline "> Sign up</Link>
                    </p>
                    <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                        <Link to="/" className="font-medium text-primary hover:underline "> Go To Home <span aria-hidden="true">&rarr;</span></Link>
                    </span>
                </div>

            </form>
        </div>
    )
}

export default Login