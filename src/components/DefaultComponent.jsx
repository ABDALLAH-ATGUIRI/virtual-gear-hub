import PropTypes from "prop-types";
const DefaultComponent = ({ title }) => {
	return (
		<div className="h-screen flex justify-center items-center text-6xl font-extrabold">
			Hello, Are you ready to start? {title}
		</div>
	);
};

DefaultComponent.propTypes = {
	title: PropTypes.string,
};

export default DefaultComponent;
