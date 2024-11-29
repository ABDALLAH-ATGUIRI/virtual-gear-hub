import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@features/auth/authSlice";
import { HiEye } from "react-icons/hi2";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { RiEyeCloseLine } from "react-icons/ri";

// ProfileMenu Component
const ProfileMenu = () => {
	const user = useSelector(selectCurrentUser);

	return (
		<Box display="flex" alignItems="center" gap={2}>
			{/* Avatar */}
			<Avatar
				alt={user?.name || "User Avatar"}
				src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
				sx={{ width: 60, height: 60 }}
			/>

			{/* Greeting */}
			<Box display={{ xs: "none", md: "block" }} textAlign="left">
				<Typography variant="paragraph" color="current">
					Welcome ...
				</Typography>
				<Typography variant="h6" fontWeight="bold" color="white">
					{user?.name?.toUpperCase() || "GUEST"}
				</Typography>
			</Box>
		</Box>
	);
};

// WelcomePanel Component
const WelcomePanel = () => {
	const [isInfoHidden, setIsInfoHidden] = useState(false);

	const toggleInfoVisibility = () => {
		setIsInfoHidden((prev) => !prev);
	};

	return (
		<Box className="h-full flex flex-col border rounded-md p-8 bg-secondary/40">
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				className="w-full"
			>
				<ProfileMenu />
				<Chip
					icon={isInfoHidden ? <RiEyeCloseLine /> : <HiEye />}
					label={isInfoHidden ? "Show info" : "Hide info"}
					variant="outlined"
					className="bg-gray-100 text-gray-800 border border-white cursor-pointer"
					size="medium"
					onClick={toggleInfoVisibility}
				/>
			</Stack>

			{!isInfoHidden && (
				<Stack
					direction="row"
					spacing={2}
					className="mt-16 justify-between flex"
				>
					{[1, 2, 3, 4, 5].map((item) => (
						<Box
							key={item}
							className="w-full md:w-1/3 border p-4 rounded-lg text-center"
						>
							Test {item}
						</Box>
					))}
				</Stack>
			)}
		</Box>
	);
};

export default WelcomePanel;
