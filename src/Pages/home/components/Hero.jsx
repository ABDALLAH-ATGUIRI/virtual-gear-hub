import { Button, Card, CardBody, CardHeader, Carousel, Typography } from "@material-tailwind/react";
import { PNGS } from "../../../assets";

function Hero() {
    return (
        <Carousel
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <div className="h-full bg-hero-bg-2 bg-cover bg-center flex justify-end" >
                <div className="w-full bg-black/40 py-24">
                    <div className="h-full flex flex-col gap-16 items-center text-center">
                        <div className="flex flex-col items-center gap-6">
                            <Typography variant="h4" color="white" className="uppercase">
                                New Reality
                            </Typography>
                            <Typography variant="h1" className="text-white lg:text-6xl">
                                New impre<span className="text-purple-500">ssions</span>
                            </Typography>
                            <Typography className="text-gray-300 md:text-xl">
                                Wear VR helmet and start new battles
                            </Typography>
                            <Button className="rounded-full bg-purple-500 w-48 p-4">to get catalog</Button>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-6 h-24 w-full">
                            <Card className="w-full bg-white/50 !p-0 h-full  max-w-[20rem] flex-row">
                                <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 w-2/5 shrink-0 bg-blue-gray-600/80rounded-r-none p-1 h-full bg-cover"
                                    style={{ backgroundImage: `url(${PNGS.glassvr_1})` }}
                                >
                                </CardHeader>
                                <CardBody className="pl-4 flex flex-col justify-center w-full">
                                    <Typography variant="h6" color="white" className="uppercase ">
                                        Oculus
                                    </Typography>
                                    <Typography variant="h6" color="white" className="">
                                        VR Glasses
                                    </Typography>
                                    <Typography className=" font-extrabold text-purple-500">
                                        129.50 $
                                    </Typography>
                                </CardBody>
                            </Card>
                            <Card className="w-full bg-white/50 p-0 h-full max-w-[20rem] flex-row">
                                <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 w-2/5 shrink-0 bg-blue-gray-600/80rounded-r-none p-1 h-full bg-cover "
                                    style={{ backgroundImage: `url(${PNGS.glassvr_2})` }}

                                >
                                </CardHeader>
                                <CardBody className="pl-4 flex flex-col justify-center w-full">
                                    <Typography variant="h6" color="white" className="uppercase">
                                        Oculus
                                    </Typography>
                                    <Typography variant="h6" color="white" className="">
                                        VR Glasses
                                    </Typography>
                                    <Typography variant="h6" className=" font-extrabold text-purple-500">
                                        129.50 $
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}

export default Hero