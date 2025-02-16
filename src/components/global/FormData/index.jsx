import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import {
	TextField,
	MenuItem,
	Button,
	Box,
	IconButton,
	Checkbox,
	FormControlLabel,
	InputAdornment,
} from "@mui/material";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
const FormData = ({
	isLoading,
	formConfig,
	onSubmit,
	variant = "outlined",
	inputClasses = "",
	buttonClasses = "",
	buttonText = "Submit",
	color = "primary",
}) => {
	const [showPassword, setShowPassword] = useState(false);

	// Initialize form data
	const [formData, setFormData] = useState(
		formConfig.reduce(
			(acc, { name, defaultValue = "" }) => ({
				...acc,
				[name]: defaultValue,
			}),
			{}
		)
	);

	// Handle input changes
	const handleChange = (name, value) => {
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(formData);
	};

	// Render fields dynamically
	const renderField = ({
		name,
		label,
		type,
		required = false,
		options = [],
		rows = 4,
	}) => {
		const value = formData[name];

		if (type === "password") {
			return (
				<TextField
					key={name}
					name={name}
					label={label}
					type={showPassword ? "text" : "password"}
					variant={variant}
					required={required}
					color={color}
					value={value}
					onChange={(e) => handleChange(name, e.target.value)}
					fullWidth
					className={`input ${inputClasses}`}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={() =>
										setShowPassword((prev) => !prev)
									}
									edge="end"
								>
									{showPassword ? (
										<MdVisibilityOff />
									) : (
										<MdVisibility />
									)}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			);
		}

		if (type === "select") {
			return (
				<TextField
					key={name}
					name={name}
					label={label}
					select
					variant={variant}
					required={required}
					color={color}
					value={value}
					onChange={(e) => handleChange(name, e.target.value)}
					fullWidth
					className={`input ${inputClasses}`}
				>
					{options.map(({ label, value }) => (
						<MenuItem key={value} value={value}>
							{label}
						</MenuItem>
					))}
				</TextField>
			);
		}

		if (type === "textarea") {
			return (
				<TextField
					key={name}
					name={name}
					label={label}
					variant={variant}
					required={required}
					color={color}
					value={value}
					onChange={(e) => handleChange(name, e.target.value)}
					fullWidth
					multiline
					rows={rows}
					className={`input ${inputClasses}`}
				/>
			);
		}

		if (type === "checkbox") {
			return (
				<FormControlLabel
					key={name}
					color={color}
					control={
						<Checkbox
							checked={value || false}
							onChange={(e) =>
								handleChange(name, e.target.checked)
							}
						/>
					}
					label={label}
					className="checkbox"
				/>
			);
		}

		// Default to standard text field
		return (
			<TextField
				key={name}
				name={name}
				label={label}
				type={type}
				color={color}
				variant={variant}
				required={required}
				value={value}
				onChange={(e) => handleChange(name, e.target.value)}
				fullWidth
				className={`input ${inputClasses}`}
			/>
		);
	};

	return (
		<Box
			component="form"
			className="form"
			onSubmit={handleSubmit}
			noValidate
		>
			{formConfig.map(renderField)}

			<Button
				type="submit"
				variant="contained"
				color={color}
				fullWidth
				className={`submit-btn ${buttonClasses}`}
				disabled={isLoading}
			>
				{isLoading ? "Submitting..." : buttonText}
			</Button>
		</Box>
	);
};

FormData.propTypes = {
	isLoading: PropTypes.bool,
	formConfig: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			type: PropTypes.oneOf([
				"text",
				"email",
				"password",
				"select",
				"textarea",
				"checkbox",
			]),
			options: PropTypes.arrayOf(
				PropTypes.shape({
					label: PropTypes.string.isRequired,
					value: PropTypes.any.isRequired,
				})
			),
			defaultValue: PropTypes.any,
			required: PropTypes.bool,
			rows: PropTypes.number,
		})
	).isRequired,
	onSubmit: PropTypes.func.isRequired,
	variant: PropTypes.string,
	inputClasses: PropTypes.string,
	buttonClasses: PropTypes.string,
	buttonText: PropTypes.string,
	color: PropTypes.string,
};

export default FormData;
