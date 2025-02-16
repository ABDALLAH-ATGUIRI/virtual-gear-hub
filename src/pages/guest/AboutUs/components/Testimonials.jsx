import TestimonialCard from "@/components/global/Card/TestimonialCard";
import { Box } from "@mui/material";
import DefaultSection from "@/components/global/Section/DefaultSection";

// Testimonial Data (Moved outside the component to prevent re-initialization)
const testimonials = [
	{
		id: "1",
		name: "John Doe",
		role: "Software Engineer",
		text: "This is an amazing product! Highly recommend it, great customer service and support from the team.",
		avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1480&q=80",
		rating: 4.5,
	},
	{
		id: "2",
		name: "Jane Smith",
		role: "Product Manager",
		text: "Exceptional service and quality! They go above and beyond to ensure customer satisfaction.",
		avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1480&q=80",
		rating: 5,
	},
	{
		id: "3",
		name: "Alice Johnson",
		role: "Designer",
		text: "Beautiful and functional design. The team was responsive and always available to address any questions.",
		avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1480&q=80",
		rating: 4,
	},
	{
		id: "4",
		name: "Alice Johnson",
		role: "Designer",
		text: "Beautiful and functional design. The team was responsive and always available to address any questions.",
		avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1480&q=80",
		rating: 4,
	},
];

const TestimonialList = () => {
	return (
		<DefaultSection
			id="testimonials"
			title="What Our Trusted User Said About Us"
		>
			{/* Testimonials Mapping */}
			<Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
				{testimonials.map((testimonial) => (
					<TestimonialCard
						key={testimonial.id}
						id={`testimonial-${testimonial.id}`}
						name={testimonial.name}
						role={testimonial.role}
						text={testimonial.text}
						avatar={testimonial.avatar}
						rating={testimonial.rating}
					/>
				))}
			</Box>
		</DefaultSection>
	);
};

export default TestimonialList;
