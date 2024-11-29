import PropTypes from "prop-types";
import { Route, Routes } from "react-router";
import { RequireAuth } from "@features/auth/RequireAuth";


const Index = () => {
	return (
		<BackofficeStructure>
			<Routes>
				<Route element={<RequireAuth />}>
					{/* <Route path="profile" element={<Profile />} /> */}
				</Route>
			</Routes>
		</BackofficeStructure>
	);
};

const BackofficeStructure = ({ children }) => {
	return (
		<div className="h-full flex">
			<div className="relative w-full max-h-screen overflow-hidden">
				<div className="h-full overflow-y-auto costume-scrollbar p-6 mt-20">
					<div className="min-h-screen">{children}</div>
				</div>
			</div>
		</div>
	);
};

BackofficeStructure.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Index;