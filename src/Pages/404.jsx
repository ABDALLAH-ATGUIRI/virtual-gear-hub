import { Link } from "react-router-dom";
import { SVGS } from "../assets";
import { Button } from "@material-tailwind/react";

const ErrorPage = () => {
    return (
        <div>
            <section className="h-screen bg-secondary/70 flex flex-col items-center justify-center pt-12" >
                <div
                    className="w-[600px] h-[600px] bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${SVGS.error_page})` }}
                >
                </div>
                <div
                    className="mx-auto h-1/5"
                >
                    <div className="max-w-xl h-full px-4 flex flex-col justify-center items-center">
                        <div className="text-center">
                            <h4
                                className="mb-6 text-[22px] font-semibold leading-tight text-white"
                            >
                                Oops! That page can’t be found
                            </h4>
                            <Link to='/'>
                                <Button className="text-base font-semibold  transition hover:text-primary">
                                    Go To Home →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ErrorPage