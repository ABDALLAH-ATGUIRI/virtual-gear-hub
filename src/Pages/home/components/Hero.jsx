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
            <div className="bg-hero-bg-2 bg-cover bg-center flex justify-end" >
                <div className="w-full bg-black/50 pt-56 pb-24">
                    <div className="h-full flex flex-col gap-16 items-center text-center">
                        <div className="flex flex-col items-center gap-4">
                            <Typography variant="h5" color="white" className="uppercase text-blue-gray-50">
                                New Reality
                            </Typography>
                            <Typography variant="h1" className="text-white lg:text-6xl">
                                New impre<span className="text-tertiary">ssions</span>
                            </Typography>
                            <Typography className="text-blue-gray-50 md:text-xl">
                                Wear VR helmet and start new battles
                            </Typography>
                            <Button className="rounded-full bg-tertiary w-48 p-4">to get catalog</Button>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-6 h-24 mt-16 w-full">
                            <Card className="w-full bg-blue-gray-200/60 !p-0 h-full  max-w-[20rem] flex-row">
                                <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 w-1/2 shrink-0 bg-transparent p-1 h-full bg-cover"
                                    style={{ backgroundImage: `url(${PNGS.glassvr_1})` }}
                                >
                                    <span></span>
                                </CardHeader>
                                <CardBody className="pl-4 flex flex-col justify-center w-full">
                                    <Typography variant="h6" className="uppercase text-blue-gray-50">
                                        Oculus
                                    </Typography>
                                    <Typography variant="h6" className="text-blue-gray-50">
                                        VR Glasses
                                    </Typography>
                                    <Typography className=" font-extrabold text-secondary">
                                        129.50 $
                                    </Typography>
                                </CardBody>
                            </Card>
                            <Card className="w-full bg-blue-gray-200/60 p-0 h-full max-w-[20rem] flex-row">
                                <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 w-1/2 shrink-0 bg-transparent p-1 h-full bg-cover "
                                    style={{ backgroundImage: `url(${PNGS.glassvr_2})` }}

                                >
                                    <span></span>
                                </CardHeader>
                                <CardBody className="pl-4 flex flex-col justify-center w-full">
                                    <Typography variant="h6" className="uppercase text-blue-gray-50">
                                        Oculus
                                    </Typography>
                                    <Typography variant="h6" className="text-blue-gray-50">
                                        VR Glasses
                                    </Typography>
                                    <Typography variant="h6" className=" font-extrabold text-secondary">
                                        129.50 $
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel >
    );
}

export default Hero