import { Fragment, Suspense } from 'react'
import { Route, Routes } from 'react-router';
import Register from './Register';
import Login from './Login';

const Auth = () => {
    return (
        <Fragment>
            <Suspense fallback={<div>Loading...</div>}>
                <AuthStructure>
                    <Routes>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </AuthStructure>
            </Suspense>
        </Fragment>
    )
}

const AuthStructure = ({ children }) => {
    return (
        <div className="w-full h-screen bg-hero-bg bg-cover bg-center">
            <div className="flex flex-col items-center justify-center px-8 py-10 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-xl xl:p-0  shadow-8xl">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Auth