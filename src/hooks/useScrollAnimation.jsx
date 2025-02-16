import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";

const useScrollAnimation = (id, options = { threshold: 0.5 }) => {
	const controls = useAnimation();
	const [elementRef, setElementRef] = useState(null);

	useEffect(() => {
		const element = document.getElementById(id);

		if (!element) return;

		setElementRef(element);

		const observer = new IntersectionObserver(
			([entry]) => {
				const rect = entry.boundingClientRect;
				const centerInView =
					rect.top + rect.height / 2 >= 0 &&
					rect.top + rect.height / 2 <= window.innerHeight;

				if (centerInView) {
					controls.start("animate");
				} else {
					controls.start("initial");
				}
			},
			{ threshold: options.threshold }
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, [controls, id, options.threshold]);

	return { controls, elementRef };
};

export default useScrollAnimation;
