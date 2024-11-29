import Footer from "../../components/global/Footer";
import Header from "../../components/global/Header";
import HomeLayout from "../../components/layouts/HomeLayout";
import Hero from "./components/Hero";

const Home = () => {
	return (
		<HomeLayout>
			{{ Navbar: <Header />, Content: <Hero />, Footer: <Footer /> }}
		</HomeLayout>
	);
};

export default Home;
