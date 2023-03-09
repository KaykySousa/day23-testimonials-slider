const buttons = document.querySelectorAll(".button-control")

const descriptionElement = document.querySelector(".description")
const authorNameElement = document.querySelector(".author-name")
const occupationElement = document.querySelector(".occupation")
const imageElement = document.querySelector(".image")

let testimonialIndex = 0

const testimonials = [
	{
		author: "Tanya Sinclair",
		occupation: "UX Designer",
		description: `I've been interested in coding for a while but never taken the jump, until now. 
        I couldn't recommend this course enough. I'm now in the job of my dreams and so 
        excited about the future.`,
		picture: "./assets/image-tanya.jpg",
	},
	{
		author: "John Tarkpor",
		occupation: "Junior Front-end Developer",
		description: `If you want to lay the best foundation possible I'd recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer.`,
		picture: "./assets/image-john.jpg",
	},
]

updateTestimonial()

function updateTestimonial() {
	const testimonial = testimonials[testimonialIndex]

	descriptionElement.innerHTML = testimonial.description
	authorNameElement.innerHTML = testimonial.author
	occupationElement.innerHTML = testimonial.occupation
	imageElement.src = testimonial.picture
	imageElement.alt = testimonial.author + " picture"
}

buttons.forEach((button, index) => {
	button.addEventListener("click", () => {
		testimonialIndex =
			Math.abs(testimonialIndex + (index === 0 ? -1 : 1)) %
			testimonials.length
		updateTestimonial()
	})
})
