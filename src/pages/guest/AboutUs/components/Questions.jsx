import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import FlexibleSection from "@/components/global/Section/FlexibleSection";
import { BiMinus, BiPlus } from "react-icons/bi";

const faqData = [
	{
		id: "panel1",
		question: "What is Virtual Reality (VR)?",
		answer: "Virtual Reality (VR) is a simulated experience that immerses users into a fully virtual environment using specialized hardware like VR headsets.",
	},
	{
		id: "panel2",
		question: "How do I get started with VR?",
		answer: "To get started, you'll need a VR headset, compatible controllers, and access to VR apps or games. Follow the setup instructions provided with your headset.",
	},
	{
		id: "panel3",
		question: "Is VR safe for children?",
		answer: "While VR can be safe for children, prolonged use or inappropriate content should be avoided. Always supervise children during VR activities.",
	},
];

const Questions = () => {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<FlexibleSection
			id="faq-section"
			heading="Explore the Metaverse"
			subheading="Dive into multisensory virtual worlds that redefine what's possible. Experience the future of immersive creativity!"
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
		>
			{{
				rightContent: (
					<>
						{/* Section Header */}
						<Box
							className="mb-12"
							component={motion.div}
							initial={{ opacity: 0, y: -50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
						>
							<Typography
								variant="h4"
								className="font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white"
							>
								Frequently Asked Questions
							</Typography>
							<Typography
								variant="subtitle1"
								className="text-gray-600 dark:text-gray-300 py-6 font-semibold"
							>
								Have a question? We've got answers!
							</Typography>
						</Box>

						{/* FAQ List */}
						<Box
							className="max-w-4xl mx-auto"
							component={motion.div}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
							transition={{ staggerChildren: 0.2 }}
						>
							{faqData.map((item) => (
								<Accordion
									key={item.id}
									expanded={expanded === item.id}
									onChange={handleChange(item.id)}
									className="shadow-md rounded-lg mb-4 bg-white dark:bg-gray-800"
								>
									<AccordionSummary
										expandIcon={
											expanded === item.id ? (
												<BiMinus size={30} />
											) : (
												<BiPlus size={30} />
											)
										}
										aria-controls={`${item.id}-content`}
										id={`${item.id}-header`}
										className="px-4 py-3 bg-gray-100 dark:bg-gray-700"
									>
										<Typography
											variant="h6"
											className="font-medium text-gray-800 dark:text-gray-200"
										>
											{item.question}
										</Typography>
									</AccordionSummary>
									<AccordionDetails className="px-4 py-3 bg-gray-50 dark:bg-gray-900">
										<Typography
											variant="body1"
											className="text-gray-700 dark:text-gray-400"
										>
											{item.answer}
										</Typography>
									</AccordionDetails>
								</Accordion>
							))}
						</Box>
					</>
				),
			}}
		</FlexibleSection>
	);
};

export default Questions;
