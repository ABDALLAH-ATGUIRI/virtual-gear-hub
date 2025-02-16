import { motion } from "framer-motion";
import { Box } from "@mui/material";
import DefaultSection from "@/components/global/Section/DefaultSection";
import FormData from "@/components/global/FormData";

const INIT_FORM = [
	{ name: "fullName", label: "Full Name", type: "text", required: true },
	{ name: "email", label: "Email", type: "email", required: true },
	{ name: "message", label: "Message", type: "textarea", required: true },
];

const ContactUs = () => {
	const motionSettings = {
		initial: { opacity: 0, y: 50 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};

	return (
		<DefaultSection id="contact-us" title="Subscribe to Our Newsletter">
			<motion.div
				{...motionSettings}
				className="flex justify-center w-5/6 bg-gray-900 border-2 border-gray-700 rounded-xl shadow-lg neon-glow bg-clip-border bg-gradient-to-tr from-purple-900 via-purple-800 to-purple-900"
			>
				<Box className="flex flex-col md:p-6 items-center gap-6 w-[30rem]">
					<h2 className="text-xl text-center font-semibold text-gray-300 mb-4">
						We’d love to hear from you!
					</h2>
					<FormData
						formConfig={INIT_FORM}
						variant="outlined"
						inputClasses="neon-input"
						buttonClasses="mt-4 w-full neon-button"
						color="secondary"
						onSubmit={() => {}}
					/>
				</Box>
			</motion.div>
		</DefaultSection>
	);
};

export default ContactUs;
