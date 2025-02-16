import { motion } from "framer-motion";
import { Box } from "@mui/material";
import FlexibleSection from "@/components/global/Section/FlexibleSection";

// Animation Variants
const animationVariants = {
  zoomIn: (delay = 0) => ({
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1, delay },
  }),
};

const Hero = () => {
  return (
    <Box className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-4 lg:px-12 py-8">
      <FlexibleSection
        id="section3"
        heading="About SnapShop"
        subheading="SnapShop is your gateway to the metaverse, offering cutting-edge VR products and experiences. We aim to connect the real and virtual worlds, empowering creativity and innovation pixel by pixel."
        buttonText="Explore Products"
        onButtonClick={() => alert("Button Clicked!")}
      >
        {{
          leftContent: (
            <Box
              className="flex-1 max-w-md md:max-w-lg lg:max-w-xl"
              component={motion.div}
              variants={animationVariants.zoomIn(0.4)}
              initial="initial"
              animate="animate"
            >
              <img
                src="https://via.placeholder.com/500x500.png?text=VR+World"
                alt="VR World"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </Box>
          ),
        }}
      </FlexibleSection>
    </Box>
  );
};

export default Hero;
