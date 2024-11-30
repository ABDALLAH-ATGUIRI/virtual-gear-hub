import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

import {
	TextField,
	MenuItem,
	Button,
	Box,
	IconButton,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	FormControlLabel,
	Checkbox,
} from "@mui/material";
import {
	MdVisibility,
	MdVisibilityOff
} from "react-icons/md";

const FormData = ({ isLoading, formConfig, onSubmit }) => {
	const [showPassword, setShowPassword] = useState(false);

	const [formData, setFormData] = useState(
		formConfig.reduce(
			(acc, { name, defaultValue = "" }) => ({
				...acc,
				[name]: defaultValue,
			}),
			{}
		)
	);

	const handleChange = (name, value) => {
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(formData);
	};

	const renderField = (field) => {
		const { name, label, type, required, options, rows } = field;
		const value = formData[name];

		switch (type) {
			case "text":
			case "email":
				return (
					<FormControl
						key={name}
						variant="outlined"
						color="secondary"
						fullWidth
						className="input"
					>
						<InputLabel
							htmlFor={`password-${name}`}
							className="input-text"
						>
							{label}
						</InputLabel>
						<OutlinedInput
							id={`password-${name}`}
							type={type}
							label={label}
							name={name}
							value={value}
							onChange={(e) => handleChange(name, e.target.value)}
							required={required}
							className="input-text"
						/>
					</FormControl>
				);

			case "password":
				return (
					<FormControl
						key={name}
						variant="outlined"
						color="secondary"
						fullWidth
						className="input"
					>
						<InputLabel
							htmlFor={`password-${name}`}
							className="input-text"
						>
							{label}
						</InputLabel>
						<OutlinedInput
							id={`password-${name}`}
							type={showPassword ? "text" : "password"}
							label={label}
							name={name}
							value={value}
							onChange={(e) => handleChange(name, e.target.value)}
							required={required}
							endAdornment={
								<InputAdornment
									position="end"
									className="bg-transparent"
								>
									<IconButton
										aria-label={
											showPassword ? "Hide password" : "Show password"
										}
										onClick={() => setShowPassword((prev) => !prev)}
									>
										{showPassword ? (
											<MdVisibilityOff />
										) : (
											<MdVisibility />
										)}
									</IconButton>
								</InputAdornment>
							}
							className="input-text"
						/>
					</FormControl>
				);

			case "select":
				return (
					<TextField
						key={name}
						select
						label={label}
						name={name}
						value={value}
						onChange={(e) => handleChange(name, e.target.value)}
						required={required}
						fullWidth
						variant="outlined"
						className="input"
					>
						{options.map(({ label, value }) => (
							<MenuItem
								key={value}
								value={value}
								className="input-text"
							>
								{label}
							</MenuItem>
						))}
					</TextField>
				);
			case "checkbox":
				return (
					<FormControlLabel
						key={name}
						control={
							<Checkbox
								checked={value  || false}
								onChange={(e) => handleChange(name, e.target.checked)}
							/>
						}
						label={label}
						className="checkbox input-text"
					/>
				);
			case "textarea":
				return (
					<TextField
						key={name}
						label={label}
						name={name}
						value={value}
						onChange={(e) => handleChange(name, e.target.value)}
						required={required}
						fullWidth
						multiline
						rows={rows || 4}
						variant="outlined"
						className="input"
					/>
				);

			default:
				return null;
		}
	};

	return (
		<Box component="form" className="form" onSubmit={handleSubmit}>
			{formConfig.map(renderField)}

			<Button
				type="submit"
				variant="contained"
				className={`submit-btn`}
				disabled={isLoading}
			>
				{isLoading ? "Submitting..." : "Submit"}
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
					value: PropTypes.string.isRequired,
				})
			),
			defaultValue: PropTypes.any,
			required: PropTypes.bool,
			rows: PropTypes.number,
		})
	).isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default FormData;
