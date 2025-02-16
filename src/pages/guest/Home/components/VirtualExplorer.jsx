import { Box } from "@mui/material";
import FlexibleSection from "@/components/global/Section/FlexibleSection";

function VirtualExplorer() {
	return (
		<Box id="virtual-explorer" className="w-full px-4 xl:px-20">

			{/* Section 1 */}
			<FlexibleSection
				id="section1"
				heading="Explore the Metaverse"
				subheading="Dive into multisensory virtual worlds that redefine
						what's possible. Experience the future of immersive
						creativity!."
				buttonText="Get Started"
				onButtonClick={() => alert("Button Clicked!")}
				decorativeShapes={[
					{
						className:
							"w-40 h-52 md:w-80 md:h-5/6 rounded-tr-[40%] self-start",
					},
					{
						className:
							"w-32 h-44 md:w-64 md:h-2/3 rounded-tl-[40%] self-end",
					},
				]}
			/>

			{/* Section 2 */}
			<FlexibleSection
				id="section2"
				heading="Redefine Virtual Worlds"
				subheading="Join the next generation of experiences where every
						interaction feels real and every moment is
						unforgettable."
				buttonText="Get Started"
				onButtonClick={() => alert("Button Clicked!")}
				decorativeShapes={[
					{
						className:
							"flex w-full ml-auto md:w-2/3 h-64 md:h-full gap-6 justify-center items-center rounded-tl-[60%]",
					},
				]}
			/>
		</Box>
	);
}

export default VirtualExplorer;
