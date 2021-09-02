import * as React from "react"
import Navbar from "@/components/Navbar"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"

const index = () => {
	return (
		<React.Fragment>
			<Navbar />
			<main className="max-w-4xl mx-auto antialiased">
				<div className="my-10 md:mt-14 md:mb-24 space-y-14 md:space-y-24">
					<About />
					<Projects />
					<Projects />
				</div>
			</main>
			<Footer />
		</React.Fragment>
	)
}

export default index
